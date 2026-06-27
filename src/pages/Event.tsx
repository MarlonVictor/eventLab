import { useParams } from "react-router-dom"
import { useMemo } from "react"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { LessonPlaceholder } from "../components/event/LessonPlaceholder"
import { getSubscriber } from "../lib/subscriber"

export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const subscriber = useMemo(() => getSubscriber(), [])

    return (
        <div className="event-surface flex flex-col h-screen overflow-hidden">
            <Header subscriber={subscriber} />

            <main className="flex flex-1 min-h-0 overflow-hidden">
                <div className="event-scroll-panel">
                    {slug ? <Video lessonSlug={slug} /> : <LessonPlaceholder />}
                </div>

                <Sidebar />
            </main>
        </div>
    )
}
