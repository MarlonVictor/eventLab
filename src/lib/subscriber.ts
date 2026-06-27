export interface Subscriber {
    name: string
    email: string
}

const STORAGE_KEY = 'ignite-lab:subscriber'

export function saveSubscriber(data: Subscriber): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getSubscriber(): Subscriber | null {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
        return null
    }

    try {
        return JSON.parse(stored) as Subscriber
    } catch {
        return null
    }
}
