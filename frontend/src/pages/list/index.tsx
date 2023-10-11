import EventCard from '@/components/event-card';
import SubTitle from '@/components/system/subtitle';
import Text from '@/components/system/text';
import Title from '@/components/system/title';
import PageLayout from '@/layouts/page';
import { listEvents } from '@/lib/events';
import { useQuery } from '@tanstack/react-query';

export interface IListPageProps { }

export default function ListPage(_props: IListPageProps) {
    const eventsQuery = useQuery({
        queryKey: ['events'],
        queryFn: listEvents,
        cacheTime: 1 // for easier development
    })

    if (eventsQuery.isLoading) return <div>Loading...</div>

    if (eventsQuery.isError) return <div>Error {(eventsQuery.error as Error).message}</div>

    const { data, meta } = eventsQuery.data
    
    return (
        <PageLayout>
            <Title className='mb-4'>Les événements de ta région</Title>
            <SubTitle variant="h2" className='mb-8'>Une envie de sortir cette semaine, ce week-end ?<br />Découvrez le meilleur des événements, bons plans et activités à faire près de chez vous.</SubTitle>
            <Text className='mb-4 flex items-center gap-1'>
                <span className='aspect-square w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 font-semibold text-sm'>
                    {meta.totalCount}
                </span>
                événements
            </Text>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {data.map(event => <EventCard {...event} />)}
            </div>
        </PageLayout>
    );
}
