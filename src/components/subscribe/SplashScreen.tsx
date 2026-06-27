import { useEffect, useState } from "react"

import { Logo } from "../Logo"

interface SplashScreenProps {
    onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
    const [phase, setPhase] = useState<'enter' | 'exit'>('enter')

    useEffect(() => {
        const exitTimer = setTimeout(() => setPhase('exit'), 1500)
        const completeTimer = setTimeout(onComplete, 2000)

        return () => {
            clearTimeout(exitTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
            <div className={phase === 'enter' ? 'splash-logo-enter' : 'splash-logo-exit'}>
                <Logo />
            </div>
        </div>
    )
}
