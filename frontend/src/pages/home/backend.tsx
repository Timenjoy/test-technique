import DocLink from '@/components/doc-link';
import Text from '@/components/system/text';
import Title from '@/components/system/title';
import ListItem from '@/components/list-item';
import SubTitle from '@/components/system/subtitle';
import Emoji, { EmojiAnimation } from '@/components/emoji';

export interface IBackEndProps { }

export default function BackEnd(_props: IBackEndProps) {
    return (
        <div className="mt-10 flex flex-col items-start gap-5">
            <Title variant="h2">
                <Emoji
                    animation={EmojiAnimation.float}
                    loop
                    playOnRender
                    amplitude={0.35}
                    speed={0.6}
                    content="⚙️"
                />{" "}
                Backend
            </Title>
            <div className="flex flex-col items-start gap-2">
                <SubTitle variant="h2">Context</SubTitle>
                <Text>
                    Le backend est une api REST (simplifiée pour les besoins de ce test).
                    Il expose des endpoints qui permettent de créer et lire des événements ainsi que de récupérer une liste de catégories.
                    Il est composée de {Object.keys(Endpoints).length} endpoints :
                </Text>
                <Text className="list-disc list-inside" as="ul">
                    {
                        Object.entries(Endpoints).map(([path, description]) => (
                            <ListItem path={path} key={path}>
                                {description}
                            </ListItem>
                        ))
                    }
                </Text>
            </div>
            <div className="flex flex-col items-start gap-2">
                <SubTitle variant="h2">Technos</SubTitle>
                <Text as="ul" className="list-disc list-inside py-1">
                    {
                        Object.entries(Technos).map(([name, { href, description }]) => (
                            <ListItem path={name} key={name}>
                                {description} <DocLink href={href} />
                            </ListItem>
                        ))
                    }
                </Text>
            </div>
            <div className="flex flex-col items-start gap-4">
                <SubTitle variant="h2">Vos tâches</SubTitle>
                <div className="flex flex-col items-start gap-1">
                    <Title variant="h6">Création d'événement</Title>
                    <Text>
                        Vous devez implémenter la fonctionnalité de <b>création d'événement</b> à l'application. Le formulaire dédié depuis le front enverra les informations sur l'endpoint <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">POST /events</span>. Il doit permettre de créer un événement avec un titre, une description, une image, une catégorie, une date de début et une date de fin.
                        Les champs doivent être validés et l'endpoint doit renvoyer une erreur si nécessaire.
                    </Text>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <Title variant="h6">Crawling</Title>
                    <Text>
                        Vous devez utiliser une api externe, symbolisée par le fichier <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">src/lib/external.ts</span> pour récupérer des événements supplémentaires et les ajouter à la base de données.
                    </Text>
                    <Text>
                        Vous devez dans un premier temps faire correspondre les champs de l'api externe avec ceux de l'api interne. Vous rejetterez les événements qui ne correspondent pas à une catégorie existante. Enfin, vous insérerez les événements dans la base de données.
                    </Text>
                </div>
                <Text>
                    Il ne sera pas nécessaire d'implémenter une authentification pour
                    ce test, l'api est en accès libre.
                </Text>
            </div>
        </div>
    );
}

const Endpoints = {
    "GET  /events": "liste des événements",
    "POST /events": "créé un événement",
    "GET  /events/:id": "détail d'un événement",
    "GET  /categories": "détail d'un événement",
    "GET  /health": "health check indiquant que l'api fonctionne correctement",
}

const Technos = {
    SQLite: {
        href: "https://www.sqlite.org/index.html",
        description: "Base de données",
    },
    Express: {
        href: "https://expressjs.com/",
        description: "Framework NodeJS",
    },
    Zod: {
        href: "https://zod.dev",
        description: "Validation des données",
    },
    Knex: {
        href: "https://knexjs.org/",
        description: "SQL Query Builder",
    },
}