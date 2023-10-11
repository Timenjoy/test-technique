import * as React from 'react';

export interface IListItemProps {
    path: string;
    children: React.ReactNode
}

export default function ListItem(props: IListItemProps) {
    return (
        <li className="my-1.5">
            <span className="bg-slate-200 text-sm text-red-500 rounded-sm px-2 py-1 font-mono whitespace-pre">{props.path}</span>&ensp;{props.children}
        </li>
    );
}
