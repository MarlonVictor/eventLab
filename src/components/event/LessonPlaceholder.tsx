import { HandPointing } from "phosphor-react"

export function LessonPlaceholder() {
    return (
        <div className="min-h-full flex items-center justify-center p-8">
            <div className="glass-card glass-card-interactive rounded-card p-10 max-w-lg w-full text-center fade-in-up delay-200 group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 shadow-[0_0_30px_rgba(97,218,251,0.15)] event-icon-pulse">
                    <HandPointing size={40} className="text-blue-500 transition-transform duration-300 group-hover:rotate-[-8deg]" weight="duotone" />
                </div>

                <h2 className="text-2xl font-bold text-gray-100">
                    Select a lesson
                </h2>

                <p className="mt-4 text-gray-300 leading-relaxed">
                    Choose a lesson from the schedule on the right to start watching the event content.
                </p>
            </div>
        </div>
    )
}
