import Emoji, {
    EmojiAnimation,
    EmojiEvent
} from "@/components/emoji";
import Bonus from "./bonus";
import BackEnd from "./backend";
import Frontend from "./frontend";
import PageLayout from "@/layouts/page";
import Text from "@/components/system/text";
import Title from "@/components/system/title";
import SubTitle from "@/components/system/subtitle";
import Delivery from "./delivery";

export interface IHomePageProps { }

export default function HomePage(_props: IHomePageProps) {
    return (
        <PageLayout className="max-w-screen-md">
            <div className="flex flex-col items-start gap-4">
                <Title className="capitalize">
                    test technique timenjoy{" "}
                    <Emoji
                        animation={EmojiAnimation.float}
                        loop
                        playOnRender
                        amplitude={0.7}
                        speed={0.5}
                        content={
                            <Emoji
                                content="🚀"
                                animation={EmojiAnimation.shout}
                                delay={3_000}
                                playOnRender
                                event={[EmojiEvent.HOVER, EmojiEvent.CLICK]}
                            />
                        }
                    />
                </Title>
                <SubTitle>
                    Pour le poste de développeur fullstack React / Node.js
                </SubTitle>
            </div>
            <div className="mt-10 flex flex-col items-start gap-5">
                <Text>
                    Bonjour et bienvenue sur ce test technique. Ce test a pour but de nous
                    permettre d'évaluer vos compétences en développement web. Il est
                    composé de deux parties : une partie front-end et une partie back-end.
                </Text>
                <Text>
                    Votre tache sera d'ajouter deux fonctionnalités à une application existante.
                    Vous devrez donc vous familiariser avec le code existant et ajouter les fonctionnalités
                    demandées. Vous êtes libre d'ajouter des packages supplémentaires si
                    vous le souhaitez tant que cela ne change pas le fonctionnement du
                    reste de l'application et que vous pouvez justifier votre choix.
                </Text>
            </div>
            <Frontend />
            <BackEnd />
            <Delivery />
            <Bonus />
            <Text variant="h5" className="mt-20">
                Date de création du test : 09/10/2023
            </Text>
        </PageLayout>
    );
}

