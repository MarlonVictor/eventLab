import { Logo } from "./Logo"
import { Subscriber } from "../lib/subscriber"

interface HeaderProps {
    subscriber?: Subscriber | null
}

function getInitial(name: string): string {
    return name.trim().charAt(0).toUpperCase()
}

export function Header({ subscriber }: HeaderProps) {
    return (
        <header className="relative z-10 shrink-0 w-full py-5 px-8 flex items-center justify-between backdrop-blur-xl bg-gray-700/30 border-b border-white/10 md:px-4">
            <Logo />

            {subscriber && (
                <div className="glass-card rounded-card px-4 py-2 flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-purple-500/30 border border-purple-500/50 flex items-center justify-center font-bold text-purple-300">
                        {getInitial(subscriber.name)}
                    </div>

                    <div className="leading-tight min-w-0">
                        <strong className="text-sm font-bold text-gray-100 block truncate max-w-[160px] md:max-w-[120px]">
                            {subscriber.name}
                        </strong>
                        <span className="text-xs text-gray-300 block truncate max-w-[160px] md:max-w-[120px]">
                            {subscriber.email}
                        </span>
                    </div>
                </div>
            )}
        </header>
    )
}
