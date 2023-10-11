import Text from '@/components/system/text';
import { AlertTriangle } from "lucide-react";
import Title from '@/components/system/title';
import Emoji, { EmojiAnimation } from '@/components/emoji';
export interface IDeliveryProps { }

export default function Delivery(_props: IDeliveryProps) {
    return (
        <div className="mt-10 flex flex-col items-start gap-5">
            <Title variant="h2">
                <Emoji
                    animation={EmojiAnimation.float}
                    loop
                    playOnRender
                    amplitude={0.35}
                    speed={0.6}
                    content="📦"
                />{" "}
                Rendu du test
            </Title>
            <Text>
                Vous devez nous faire parvenir le test sous forme d'une archive zip contenant
                l'ensemble du code source de l'application à l'adresse <a className='underline text-blue-500' href="mailto:emmanuel@timenjoy.fr">emmanuel@timenjoy.fr</a>. Vous pouvez l'envoyer directement par mail ou utiliser
                n'importe quel service de partage de fichier (ex: WeTransfer) pour nous envoyer le fichier.
            </Text>
            <Text className='bg-slate-200/50 py-4 px-6 rounded-lg w-full flex items-center'>
                <AlertTriangle className="inline-block mr-2 text-red-600" /> Pensez à exclure le dossier&ensp;<span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono">node_modules</span>&ensp;de l'archive.
            </Text>
        </div>
    );
}
