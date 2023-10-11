import Header from '@/components/header';
import { cn } from '@/lib/utils';
import * as React from 'react';

export interface IPageLayoutProps
    extends React.ComponentPropsWithoutRef<"main"> { }

export default function PageLayout({ className, children, ...props }: IPageLayoutProps) {
    return (
        <>
            <Header />
            <div className="md:px-20 px-5 w-screen h-full pt-10">
                <main {...props} className={cn("w-full max-w-screen-lg mx-auto flex flex-col items-stretch mb-20", className)}>
                    {children}
                </main>
            </div>
        </>
    );
}
