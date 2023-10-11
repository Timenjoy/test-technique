/**
 *
 *
 *
 *
 *
 *
 *
 *
 * CE FICHIER EXPORTE UNE FONCTION `getData()`
 * QUI SIMULE UN APPEL À UNE API EXTERNE
 * POUR LES BESOINS DU TEST
 *
 * ELLE RENVOIE UNE LISTE D'ÉVÈNEMENTS
 * AVEC UNE PAGINATION
 *
 * ELLE INTEGRE AUSSI UN RATE LIMIT DE 2 REQUÊTES
 * PAR SECONDE ET A UN TAUX D'ÉCHEC ALÉATOIRE
 *
 *
 * NE PAS MODIFIER CE FICHIER
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { setTimeout } from "timers/promises";
import { z } from "zod";

const getDataSchema = z.object({
  page: z.number().int().positive().min(1).max(5),
  perPage: z.number().int().positive().max(5),
});

export interface GetDataParams extends z.infer<typeof getDataSchema> {}

export async function getData({
  page,
  perPage,
}: GetDataParams): Promise<Response> {
  try {
    return (
      checkParams({ page, perPage }) ?? // validate params
      bucketRateLimit() ?? // simulate rate limit
      (await setTimeout(100)) ?? // simulate network latency
      (await randomFailureRate()) ?? // simulate random failure
      answerCorrectly(page, perPage) // return data if all above has passed
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);

    return new Response(message, {
      headers: {
        "Retry-After": "0",
      },
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

function answerCorrectly(page: number, perPage: number) {
  const response: IExternalApiResponse = {
    data,
    meta: {
      page,
      perPage,
      isLastPage: page * perPage >= data.length,
    },
  };
  return new Response(JSON.stringify(response), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "Retry-After": "0",
    },
    status: 200,
    statusText: "OK",
  });
}

function checkParams(params: GetDataParams) {
  const parsed = getDataSchema.safeParse(params);
  if (!parsed.success)
    return new Response(JSON.stringify(parsed.error), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "Retry-After": "0",
      },
      status: 400,
    });
}

async function randomFailureRate() {
  const random = Math.random();
  if (random < 0.3) {
    // exagerated failure rate
    await setTimeout(500);
    return new Response("Internal Server Error", {
      headers: {
        "Retry-After": "0",
      },
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

const requestBucket: number[] = [];

function bucketRateLimit() {
  const canDoRequest = requestBucket.length < 2;
  if (!canDoRequest) {
    const nextRequest = Math.ceil((requestBucket[0] - Date.now()) / 1_000);
    return new Response("Too many requests", {
      headers: {
        "Retry-After": nextRequest + "",
      },
      status: 429,
      statusText: "Too many requests",
    });
  }
  requestBucket.push(Date.now() + 1_000);
  setTimeout(1_000).then(() => {
    requestBucket.shift();
  });
}

interface IExternalEntityCover {
  id: string;
  url: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
}
interface IExternalEntityClassification {
  id: string;
  category: string;
  weight: number;
}
interface IExternalEntityDates {
  id: string;
  start: Date;
  end: Date;
}
interface IExternalEntityEvent {
  id: string;
  name: string;
  content: string;
  covers: IExternalEntityCover[];
  classification: IExternalEntityClassification[];
  dates: IExternalEntityDates[];
  createdAt: Date;
  updatedAt: Date;
}

interface IExternalApiResponse {
  data: IExternalEntityEvent[];
  meta: {
    page: number;
    perPage: number;
    isLastPage: boolean;
  };
}

const data: IExternalEntityEvent[] = [
  {
    id: "b2aadfba-cdd5-42f9-9b01-7b4358c078ad",
    name: "Musée national du sport",
    content:
      "Le Musée National du Sport de Nice est un lieu incontournable pour tous les passionnés de sport. Il abrite une collection unique d'objets, de documents et d'archives liés à l'histoire du sport, ainsi qu'à la culture et aux événements sportifs en France et dans le monde. Le musée propose des expositions permanentes et temporaires qui offrent un aperçu captivant de l'évolution du sport, depuis ses débuts jusqu'à nos jours. Les visiteurs peuvent également participer à des activités interactives et des événements pour mieux comprendre l'impact du sport sur la société et la culture. Le Musée National du Sport est une destination idéale pour les familles, les groupes scolaires et les passionnés de sport de tous âges. Réservez dès maintenant pour découvrir cette vitrine exceptionnelle de l'histoire du sport.",
    covers: [
      {
        id: "3eaf340f-1031-4cc4-9ddb-a4009af97f63",
        url: "https://apisails.timenjoy.fr/event/0ea3a344-15af-498a-9ff0-5bdb72e0674f/getImage/musee-national-du-sport.jpeg",
        width: 400,
        height: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    classification: [
      {
        id: "420adc3a-3d4f-49e9-b66c-5216f287123e",
        category: "museum",
        weight: 1,
      },
      {
        id: "da283871-6d27-4844-b764-35d32a2acc60",
        category: "sport",
        weight: 0.3,
      },
    ],
    dates: [
      {
        id: "8cb7b705-ddc8-4642-b2e8-e0e2ad54e030",
        start: new Date("2023-10-11T11:00:00.000Z"),
        end: new Date("2023-10-11T17:00:00.000Z"),
      },
      {
        id: "15729c7d-3afa-4cec-b746-7d6ee1f160e3",
        start: new Date("2023-10-12T11:00:00.000Z"),
        end: new Date("2023-10-12T17:00:00.000Z"),
      },
      {
        id: "8ec0dc0a-f79d-4595-8f08-53f1cb3fdc78",
        start: new Date("2023-10-13T11:00:00.000Z"),
        end: new Date("2023-10-13T17:00:00.000Z"),
      },
      {
        id: "4ec3ed82-6f9f-4f9c-86d1-eb066a993f4c",
        start: new Date("2023-10-14T11:00:00.000Z"),
        end: new Date("2023-10-14T17:00:00.000Z"),
      },
      {
        id: "55316ee8-2ba0-4f47-addf-69bf71653c3b",
        start: new Date("2023-10-15T11:00:00.000Z"),
        end: new Date("2023-10-15T17:00:00.000Z"),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8e363e98-29c4-48e0-84e6-59c23685b5b9",
    name: "Villa Ephrussi de Rothschild",
    content:
      "Le Musée National du Sport de Nice est un lieu incontournable pour tous les passionnés de sport. Il abrite une collection unique d'objets, de documents et d'archives liés à l'histoire du sport, ainsi qu'à la culture et aux événements sportifs en France et dans le monde. Le musée propose des expositions permanentes et temporaires qui offrent un aperçu captivant de l'évolution du sport, depuis ses débuts jusqu'à nos jours. Les visiteurs peuvent également participer à des activités interactives et des événements pour mieux comprendre l'impact du sport sur la société et la culture. Le Musée National du Sport est une destination idéale pour les familles, les groupes scolaires et les passionnés de sport de tous âges. Réservez dès maintenant pour découvrir cette vitrine exceptionnelle de l'histoire du sport.",
    covers: [
      {
        id: "5e35e32d-12e6-4a6d-a9cd-26d8d7fe30b3",
        url: "https://apisails.timenjoy.fr/event/b16c0ed4-530a-4770-80e7-88c501f35ec6/getImage/villa-ephrussi-de-rothschild.jpeg",
        width: 400,
        height: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5e35e32d-12e6-4a6d-a9cd-26d8d7fe30b3",
        url: "https://apisails.timenjoy.fr/event/b16c0ed4-530a-4770-80e7-88c501f35ec5/getImage/villa-ephrussi-de-rothschild.jpeg",
        width: 400,
        height: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    classification: [
      {
        id: "cb8d42ed-8247-4d8b-85e8-e328b5323b83",
        category: "visit",
        weight: 1,
      },
      {
        id: "49d876df-64a8-4dc2-8101-c52ccc4cda53",
        category: "tourism",
        weight: 0.8,
      },
    ],
    dates: [
      {
        id: "038c8634-50dd-4ebd-8d1f-295b34747235",
        start: new Date("2023-10-11T10:00:00.000Z"),
        end: new Date("2023-10-11T18:00:00.000Z"),
      },
      {
        id: "4144f785-d9ee-44b5-97c3-69f3fef13c85",
        start: new Date("2023-10-12T10:00:00.000Z"),
        end: new Date("2023-10-12T18:00:00.000Z"),
      },
      {
        id: "1175bb29-deac-42c0-a4f9-e025cda75126",
        start: new Date("2023-10-13T10:00:00.000Z"),
        end: new Date("2023-10-13T18:00:00.000Z"),
      },
      {
        id: "b02cd970-e696-406e-9882-6c836d8abf1a",
        start: new Date("2023-10-14T10:00:00.000Z"),
        end: new Date("2023-10-14T18:00:00.000Z"),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4505de14-48fe-48f0-901d-bfbfe28cae49",
    name: "ELECTROPHAZZ",
    content: `Une musique groove aux allures modernes ancrée dans de profondes racines afro-américaines, c’est le mélange unique d’Electrophazz, entre Soul, Jazz & Hip Hop.

      Porté par une plume affutée, c’est aussi un message universel d’amour, de combativité, ou encore d’espoir que le groupe défend et dans lequel chacun peut se reconnaître. Electrophazz feat.
      
      Mickaëlle Leslie and Eneeks, c’est une musique métissée et originale qui réunit sur scène une chanteuse à la voix exceptionnelle, un rappeur au flow pénétrant, un saxophoniste au son électrisé, et une section rythmique décoiffante. Avec passion, Electrophazz nous partage son amour de la musique et son sens de la fête grâce à un vrai show son et lumière !
      
      C’est à Lyon en 2007 que 4 jeunes étudiants se réunissent autour de l’envie commune de jouer du jazz en empruntant les sonorités électroniques utilisées par des groupes qui les inspirent tels que Daft Punk ou No Jazz, Electro Deluxe et bien d’autres. Ils cherchent un son, un nom : Electrophazz fait ses premières apparitions. Malgré de petits moyens « Home Made », le groupe sort en 2008 son premier album, principalement instrumental intitulé « Made in Phazz-trip 1 ».
      
      Le projet ne cesse ensuite de grandir à travers de nouvelles rencontres orchestrées par David Marion, principal compositeur du groupe.
      
      Electrophazz produit régulièrement de nouveaux sons et contenus en collaboration avec des artistes confirmés comme Eneeks (Londres, récente collaboration avec le grand Omar Lyefook) et Mickaëlle Leslie (Le Mouv’, Hip Hop Symphonique). `,
    covers: [
      {
        id: "efeff016-7909-4dbb-88ef-5b353caa510f",
        url: "https://apisails.timenjoy.fr/event/18d6c2d4-82f9-44a3-abdb-98d2ba5f07aa/getImage/electrophazz.jpeg",
        width: 400,
        height: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    classification: [
      {
        id: "7f133b7b-85a9-4e46-b5d5-47b2a46b0f2d",
        category: "concert",
        weight: 1,
      },
      {
        id: "5be490ba-c132-4542-bbee-4a2a6e5817e3",
        category: "night",
        weight: 1,
      },
    ],
    dates: [
      {
        id: "cdcdeb87-f851-48ec-a1d7-e663fe6cf1e2",
        start: new Date("2023-12-14T18:30:00.000Z"),
        end: new Date("2023-12-14T21:30:00.000Z"),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
