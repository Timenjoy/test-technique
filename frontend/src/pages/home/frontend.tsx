import Text from '@/components/system/text';
import DocLink from '@/components/doc-link';
import Title from '@/components/system/title';
import ListItem from '@/components/list-item';
import SubTitle from '@/components/system/subtitle';
import Emoji, { EmojiAnimation } from '@/components/emoji';

export interface IFrontEndProps { }

export default function FrontEnd(_props: IFrontEndProps) {
    return (
        <div className="mt-10 flex flex-col items-start gap-5">
            <Title variant="h2">
                <Emoji
                    animation={EmojiAnimation.float}
                    loop
                    playOnRender
                    amplitude={0.35}
                    speed={0.6}
                    content="🖥️"
                />{" "}
                Frontend
            </Title>
            <div className="flex flex-col items-start gap-2">
                <SubTitle variant="h2">Context</SubTitle>
                <Text>
                    L'application est un site de diffusion d'événements. Elle permet de
                    créer des événements et de les afficher. Elle est composée de {Object.keys(Pages).length}
                    pages :
                </Text>
                <Text className="list-disc list-inside" as="ul">
                    {
                        Object.entries(Pages).map(([path, description]) => (
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
            <div className="flex flex-col items-start gap-2">
                <SubTitle variant="h2">Votre tâche</SubTitle>
                <Text>
                    Vous devez implémenter la fonctionnalité de <b>création d'événement</b> à l'application. Le formulaire doit être accessible depuis la
                    page <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">/create</span>. Il doit permettre de créer un événement
                    avec un titre, une description, une image, une catégorie, une date de début et une date de fin.
                    Les champs doivent être validés et afficher une erreur si ils ne sont
                    pas correctement remplis. Une fois l'événement créé, l'utilisateur doit être redirigé vers la
                    page de détail de l'événement créé.
                </Text>
                <Text>
                    La <b>liste des catégories</b> est disponible depuis l'endpoint <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">GET /api/categories</span> du backend.
                </Text>
                <Text>
                    Cette fonctionnalité implique de créer un endpoint <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">POST /api/events</span> dans le backend.
                </Text>
            </div>
        </div >
    );
}

const Pages = {
    "/": "page d'accueil du test (cette page)",
    "/list": "liste des événements",
    "/details/:id/:slug": "détail d'un événement",
    "/create": "formulaire de création d'événement",
}

const Technos = {
    React: {
        href: "https://react.dev/",
        description: "librairie UI",
    },
    Tailwindcss: {
        href: "https://tailwindcss.com/",
        description: "framework CSS",
    },
    "React Router": {
        href: "https://reactrouter.com/",
        description: "librairie de routing",
    },
    "Shadcn/ui": {
        href: "https://ui.shadcn.com/",
        description: "librairie de composants",
    },
    Vite: {
        href: "https://vitejs.dev/",
        description: "module bundler",
    },
    Lucide: {
        href: "https://lucide.dev/",
        description: "librairie d'icones",
    },
}