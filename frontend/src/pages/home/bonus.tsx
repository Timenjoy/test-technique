import Text from '@/components/system/text';
import Title from '@/components/system/title';
import Emoji, { EmojiAnimation } from '@/components/emoji';

export interface IBonusProps { }

export default function Bonus(_props: IBonusProps) {
    return (
        <div className="mt-10 flex flex-col items-start gap-5">
            <Title variant="h2">
                <Emoji
                    animation={EmojiAnimation.float}
                    loop
                    playOnRender
                    amplitude={0.35}
                    speed={0.6}
                    content="💡"
                />{" "}
                Bonus : tests automatisés{" "}
                <Emoji
                    animation={EmojiAnimation.float}
                    loop
                    playOnRender
                    amplitude={0.35}
                    speed={0.6}
                    content="🧪"
                />
            </Title>
            <Text>
                Si vous avez le temps, vous pouvez ajouter des tests automatisés à
                votre code. La création de tests unitaires, d'intégration ou
                end-to-end est un plus. Vous pouvez utiliser les outils de votre
                choix.
            </Text>
        </div>
    );
}
