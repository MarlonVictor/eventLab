import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="event-sidebar-panel w-[348px] shrink-0 backdrop-blur-xl bg-gray-700/30 p-6 border-l border-white/10">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-white/10 block">
                Lesson schedule
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    /> 
                ))}
            </div>
        </aside>
    )
}
