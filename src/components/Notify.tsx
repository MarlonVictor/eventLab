import { createContext, ReactNode, useCallback, useContext, useState } from "react"

type NotifyType = 'error' | 'success' | 'info'

interface Notification {
    id: number
    message: string
    type: NotifyType
}

interface NotifyContextValue {
    notify: (message: string, type?: NotifyType) => void
}

const NotifyContext = createContext<NotifyContextValue | null>(null)

const typeStyles: Record<NotifyType, string> = {
    error: 'border-red-500/40 bg-red-500/10 text-red-200',
    success: 'border-green-300/40 bg-green-300/10 text-green-300',
    info: 'border-blue-500/40 bg-blue-500/10 text-blue-200',
}

export function NotifyProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const notify = useCallback((message: string, type: NotifyType = 'info') => {
        const id = Date.now()
        setNotifications(prev => [...prev, { id, message, type }])

        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id))
        }, 5000)
    }, [])

    return (
        <NotifyContext.Provider value={{ notify }}>
            {children}

            <div
                className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0 pointer-events-none"
                aria-live="polite"
            >
                {notifications.map(notification => (
                    <div
                        key={notification.id}
                        className={`pointer-events-auto backdrop-blur-xl border rounded-card px-4 py-3 text-sm shadow-lg animate-fade-in ${typeStyles[notification.type]}`}
                    >
                        {notification.message}
                    </div>
                ))}
            </div>
        </NotifyContext.Provider>
    )
}

export function useNotify() {
    const context = useContext(NotifyContext)

    if (!context) {
        throw new Error('useNotify must be used within NotifyProvider')
    }

    return context.notify
}
