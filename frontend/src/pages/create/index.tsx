import SubTitle from '@/components/system/subtitle';
import Title from '@/components/system/title';
import PageLayout from '@/layouts/page';
import * as React from 'react';

export interface ICreatePageProps {
}

export default function CreatePage(props: ICreatePageProps) {
    return (
        <PageLayout>
            <div className='fixed inset-0 pointer-events-none flex flex-col justify-center items-center'>
                <Title>Create Page - WIP ⚠️</Title>
                <SubTitle className='text-6xl'>://</SubTitle>
            </div>
        </PageLayout>
    );
}
