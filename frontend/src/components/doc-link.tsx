import * as React from 'react';
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IDocLinkProps
    extends React.ComponentPropsWithoutRef<"a"> { }

export default function DocLink(props: IDocLinkProps) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            className={cn("underline text-blue-500 hover:text-blue-700", props.className)}
        >
            <ExternalLink className="w-4 h-4 inline relative bottom-0.5" />
        </a>
    );
}
