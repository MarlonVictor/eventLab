import { Broadcast, CalendarBlank, CheckCircle, Lock, PlayCircle } from 'phosphor-react';
import { format, isPast } from "date-fns";
import enUS from 'date-fns/locale/en-US';
import { Link, useParams } from 'react-router-dom';


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEE' • 'd MMM' • 'HH:mm", {
        locale: enUS,
    })

    const isActiveLesson = slug === props.slug
    const isLive = props.type === 'live'

    return (
        <Link
            to={`/event/lesson/${props.slug}`}
            className={`group block ${!isLessonAvailable ? 'pointer-events-none opacity-50' : ''}`}
        >
            <article className={`rounded-card border p-4 transition-all duration-300 ${
                isActiveLesson
                    ? 'border-purple-500 bg-purple-500/25 ring-2 ring-purple-500/40 shadow-lg shadow-purple-500/20'
                    : 'event-hover-lift border-white/10 bg-gray-800/25 group-hover:border-blue-500/40 group-hover:bg-gray-700/35 group-hover:shadow-lg group-hover:shadow-blue-500/5'
            }`}>
                <header className="flex items-center justify-between gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide ${
                        isLive
                            ? isActiveLesson ? 'text-green-300' : 'text-green-300/70 group-hover:text-green-300'
                            : isActiveLesson ? 'text-blue-300' : 'text-blue-400/70 group-hover:text-blue-400'
                    }`}>
                        {isLive ? <Broadcast size={10} weight="fill" /> : <PlayCircle size={10} weight="fill" />}
                        {isLive ? 'Live' : 'Practice'}
                    </span>

                    {isActiveLesson ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-purple-200">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
                            </span>
                            Now showing
                        </span>
                    ) : isLessonAvailable ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-500 group-hover:text-blue-400">
                            <CheckCircle size={12} weight="fill" className="shrink-0" />
                            Released
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-orange-400">
                            <Lock size={12} weight="fill" className="shrink-0" />
                            Soon
                        </span>
                    )}
                </header>

                <h3 className={`font-bold text-[0.95rem] leading-snug transition-colors duration-200 ${
                    isActiveLesson ? 'text-white' : 'text-gray-100 group-hover:text-white'
                }`}>
                    {props.title}
                </h3>

                <p className={`mt-2.5 flex items-center gap-1.5 text-xs capitalize ${
                    isActiveLesson ? 'text-purple-200/80' : 'text-gray-400'
                }`}>
                    <CalendarBlank size={13} className={`shrink-0 transition-colors ${
                        isActiveLesson ? 'text-purple-300/70' : 'text-gray-500 group-hover:text-gray-400'
                    }`} />
                    {availableDateFormatted}
                </p>
            </article>
        </Link>
    )
}
