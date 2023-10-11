import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PlusSquare } from "lucide-react";

export interface IHeaderProps { }

export default function Header(_props: IHeaderProps) {
    return (
        <header className="w-screen shadow-sm shadow-slate-200 bg-white md:px-20 sm:px-5">
            <nav className="flex items-center justify-between max-w-screen-lg mx-auto py-4">
                <a href="/" className="">
                    <img
                        src="https://timenjoy.fr/img/logo.webp"
                        alt="TimeJoy"
                        className="w-10 h-10"
                    />
                </a>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Link to="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Link to="/list">événements</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "bg-lime-500 text-white hover:bg-lime-400 hover:text-white"
                                )}
                            >
                                <Link to="/create" className="flex gap-2 items-center">
                                    <PlusSquare className=" w-4 h-4" /> Ajouter
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    );
}
