import PageLayout from "@/layouts/page";
import { getEventById } from "@/lib/events";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useParams } from "react-router-dom";
import z from "zod";
import slugify from 'slugify';
import Title from "@/components/system/title";
import dayjs from "dayjs";
import SubTitle from "@/components/system/subtitle";
import Text from "@/components/system/text";
import { ArrowLeftCircle } from "lucide-react";
import environment from "@/lib/environment";

export interface IDetailsPageProps { }
export interface IDetailsPageParams extends Record<string, string> {
    id: string
    slug: string
}

export default function DetailsPage(_props: IDetailsPageProps) {
    const params = useParams<IDetailsPageParams>()
    const parsedParams = paramsSchema.safeParse(params)
    const eventQuery = useQuery({
        queryKey: ['event', params.id],
        async queryFn() {
            if (!parsedParams.success) throw new Error('Invalid params')
            const { id } = parsedParams.data
            return getEventById(id)
        },
        cacheTime: 1
    })

    if (!parsedParams.success) return <Navigate to='/404' />

    if (eventQuery.isLoading) return <div>Loading...</div>

    if (eventQuery.isError) return <div>Error {(eventQuery.error as Error).message}</div>

    const requiredSlug = slugify(eventQuery.data.title)

    if (params.slug !== requiredSlug) return <Navigate to={`/details/${params.id}/${requiredSlug}`} replace={true} />

    const event = eventQuery.data
    return (
        <PageLayout className="gap-8">
            <Link to='/list' className='text-slate-500 hover:text-slate-600 transition-colors duration-200 flex gap-2 items-center hover:bg-slate-200 w-fit p-2 rounded-md'>
                <ArrowLeftCircle /> Retour à la liste
            </Link>
            <div className='flex flex-col gap-2 items-center'>
                <SubTitle variant="h2" className='capitalize'>#{event.category}</SubTitle>
                <Title>{event.title}</Title>
                <Text>Du {dayjs(event.start).format("DD MMMM [à] LT")} au {dayjs(event.end).format("DD MMMM [à] LT")}</Text>
            </div>
            <img src={environment.VITE_APP_API_URL + event.image} className='w-full aspect-[2] max-w-screen-sm mx-auto rounded-lg' title={event.title} />
            <div className='flex flex-col gap-2'>
                <SubTitle variant="h2">Desctiption</SubTitle>
                <Text>{event.description}</Text>
            </div>
        </PageLayout>
    );
}

const paramsSchema = z.object({
    id: z.string().uuid(),
    slug: z.string().optional()
})