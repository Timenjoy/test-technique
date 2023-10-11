import { Event, EventTable } from "./models/event.model";

export default async function seed() {
  console.log("seed");
  await EventTable().delete("*");
  await EventTable().insert(data);
  console.log("seeded");
}

const data: Omit<Event, "id" | "createdAt" | "updatedAt">[] = [
  {
    category: "concert",
    title: "SOPRANO",
    description:
      "Après sa phénoménale première tournée des stades, Soprano retrouve la route des Zénith de France en 2023 avec le “Chasseur d’étoiles tour” avant de remplir le Stade de France le 6 mai 2023 ! Amet non minim commodo et voluptate. Sunt excepteur fugiat occaecat velit. Ut anim ipsum mollit do esse veniam anim mollit culpa ullamco labore. Veniam anim labore commodo eu ut amet commodo voluptate deserunt est. Laborum commodo reprehenderit laborum reprehenderit aliqua.",
    start: new Date("2023-10-14T20:00:00.000Z"),
    end: new Date("2023-10-14T23:59:59.000Z"),
    image: "/assets/soprano.jpeg",
  },
  {
    category: "concert",
    title: "CHRISTOPHE MAE",
    description:
      "Organisateur : SUD Concerts Christophe Maé signe son grand retour sur scène en 2023 ! C'est au Cap Vert, sur les terres de Cesária Évora, qu'il a décidé de poser ses valises pour s'inspirer et créer. De ce voyage ressort un nouvel album prévu au printemps prochain porté par le single Pays des merveilles. Rendez-vous dans les Zénith de France et à l'Accor Arena le 16 décembre 2023.",
    start: new Date("2023-12-10T18:00:00.000Z"),
    end: new Date("2023-12-10T23:59:59.000Z"),
    image: "/assets/christophe-mae.jpeg",
  },
  {
    category: "theater",
    title: "LE PRINCIPE D’INCERTITUDE",
    description:
      "Dans ce monde d’incertitudes, qui peut prédire ce qui rapprochera ou éloignera deux êtres ? Quand Georgie, une américaine un peu fougueuse de 40 ans, et Alex, un boucher britannique discret de plus de 70 ans se rencontrent par hasard, sur le parvis d’une gare internationale, leur vie s’en trouve bouleversée à jamais. En se découvrant, leur relation se tisse, évolue au fil de leurs échanges, transformant peu à peu leur vision de la vie. À travers leur rencontre fortuite (ou pas…), Simon Stephens explore la manière dont notre perception des gens et nos relations changent en fonction de ce que nous savons, de ce que nous voyons, et selon le point de vue duquel nous explorons les choses. Un vrai moment de complicité pour les deux comédiens qui interprètent ces deux personnages désenchantés. Laura Smet, surprenante, confirme une vraie présence sur scène pour son premier rôle au théâtre aux côtés du talentueux Jean-Pierre Darroussin.",
    start: new Date("2023-11-03T20:00:00.000Z"),
    end: new Date("2023-11-03T22:00:00.000Z"),
    image: "/assets/le-principe-dincertitude.jpeg",
  },
  {
    category: "spectacle",
    title: 'Soirée spectacle cabaret au Paradis Latin : "L\'oiseau paradis"',
    description:
      'Soirée spectacle cabaret au Paradis Latin : "L\'oiseau paradis"',
    start: new Date("2023-10-11T19:30:00.000Z"),
    end: new Date("2023-10-11T23:59:59.000Z"),
    image:
      "/assets/soiree-spectacle-cabaret-au-paradis-latin-loiseau-paradis.jpeg",
  },
  {
    category: "spectacle",
    title: "PABLO MIRA",
    description:
      "Famille, sexualité, nouvelles technologies… Dans son nouveau spectacle, Pablo Mira s’interroge sur l’évolution de notre société sur ces trente dernières années.Et s’il abandonne son personnage caricatural d’éditorialiste réac, il conserve son esprit et son ton satirique. Il s’agit du deuxième one-man-show du trublion après l’hilarant “Pablo Mira dit des choses contre de l’argent”, créé en 2017 et qui a fait salle comble depuis.En vrai sniper de l’humour (« Le plaisir pur de faire des vannes, pour moi, c’est instinctif comme une bonne bouffe !”), il aime jouer avec l’absurde et le cynisme pour faire passer des messages, quitte à apparaître comme totalement immoral : “On ne peut pas interdire aux riches d’être super riches, alors qu’on autorise les pauvres à être super pauvres. Ça n’a pas de sens !”Cet originaire des Hauts-de-Seine a d’abord été journaliste à la radio puis à la télévision, et a cofondé, en 2012, avec Sébastien Liébus, le célèbre site d’informations parodiques Gorafi où il signait des pastiches d’articles délirants.En 2016, il rejoint France Inter en tant que chroniqueur dans Si tu écoutes, j’annule tout – qui deviendra Par Jupiter ! et on le voit aux côtés de Natacha Polony dans l’émission Polonium, sur Paris Première. Deux ans plus tard, il tient la chronique hebdomadaire consacrée aux haters dans Quotidien sur TMC.",
    start: new Date("2023-10-11T19:30:00.000Z"),
    end: new Date("2023-10-11T23:59:59.000Z"),
    image: "/assets/pablo-mira.jpeg",
  },
];
