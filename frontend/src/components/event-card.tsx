import { IEvent } from '@/lib/events';
import dayjs from 'dayjs';
import Title from './system/title';
import SubTitle from './system/subtitle';
import { CalendarDays, Shapes } from 'lucide-react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import environment from '@/lib/environment';

export interface IEventCardProps extends IEvent { }

export default function EventCard(props: IEventCardProps) {
    const slug = slugify(props.title)
    return (
        <Link to={`/details/${props.id}/${slug}`}>
            <div className='flex flex-col rounded-lg bg-white shadow shadow-slate-200 overflow-hidden'>
                <img src={environment.VITE_APP_API_URL + props.image} className='w-full aspect-[2]' title={props.title} />
                <div className="px-4 py-3">
                    <Title variant="h4" title={props.title} className='mb-1'>{props.title}</Title>
                    <SubTitle variant="h4" className='flex items-center'>
                        <CalendarDays className='inline-block mr-2' size={14} />
                        {dayjs(props.start).format("[Date :] DD.MM.YYYY")}
                    </SubTitle>
                    <SubTitle variant="h4" className='flex items-center capitalize'>
                        <Shapes className='inline-block mr-2' size={14} />
                        {props.category}
                    </SubTitle>
                </div>
            </div>
        </Link>
    );
}
