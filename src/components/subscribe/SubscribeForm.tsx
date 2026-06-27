import { FormEvent, useState } from "react"

interface FormErrors {
    name?: boolean
    email?: boolean
}

interface SubscribeFormProps {
    loading: boolean
    onSubmit: (data: { name: string; email: string }) => void | Promise<void>
}

function validate(name: string, email: string): FormErrors {
    const errors: FormErrors = {}
    const trimmedName = name.trim()

    if (!trimmedName || trimmedName.length < 3) {
        errors.name = true
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = true
    }

    return errors
}

export function SubscribeForm({ loading, onSubmit }: SubscribeFormProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const validationErrors = validate(name, email)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})
        await onSubmit({ name: name.trim(), email })
    }

    return (
        <div className="glass-card rounded-card p-8 min-w-[400px] max-w-[640px] md2:w-full md2:max-w-[400px] md2:mx-auto sm:min-w-0 sm:p-6 fade-in-up delay-400">
            <strong className="text-2xl mb-6 block fade-in-up delay-500 md2:text-center">Subscribe for free</strong>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
                <div className="fade-in-up delay-550">
                    <input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        className={`glass-input rounded-input w-full h-14 px-5 ${errors.name ? 'glass-input--error' : ''}`}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="fade-in-up delay-600">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        className={`glass-input rounded-input w-full h-14 px-5 ${errors.email ? 'glass-input--error' : ''}`}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="event-btn mt-4 bg-purple-500 py-4 rounded-input font-bold text-sm disabled:opacity-70 hover:bg-purple-300 hover:brightness-110 fade-in-up delay-650"
                >
                    {loading ? 'Loading...' : 'Secure my spot'}
                </button>
            </form>
        </div>
    )
}
