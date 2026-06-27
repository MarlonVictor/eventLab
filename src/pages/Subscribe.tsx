import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useCreateSubscriberMutation } from "../graphql/generated"
import { Logo } from "../components/Logo"
import { useNotify } from "../components/Notify"
import { AnimatedBackground } from "../components/ui/AnimatedBackground"
import { SplashScreen } from "../components/subscribe/SplashScreen"
import { SubscribeForm } from "../components/subscribe/SubscribeForm"
import { getMutationErrorMessage, formatGraphQLError } from "../lib/graphql-errors"
import { saveSubscriber } from "../lib/subscriber"

import mockupImg from '../assets/mockup.png'

export function Subscribe() {
    const navigate = useNavigate()
    const notify = useNotify()
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    const [showSplash, setShowSplash] = useState(true)
    const [showContent, setShowContent] = useState(false)

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false)
        setShowContent(true)
    }, [])

    async function handleSubscribe({ name, email }: { name: string; email: string }) {
        try {
            const result = await createSubscriber({
                variables: { name, email }
            })

            if (result.errors?.length) {
                notify(
                    result.errors.map(error => formatGraphQLError(error.message)).join(' '),
                    'error'
                )
                return
            }

            saveSubscriber({ name, email })
            navigate('/event')
        } catch (error) {
            notify(getMutationErrorMessage(error), 'error')
        }
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <AnimatedBackground />

            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

            {showContent && (
                <>
                    <div className="relative h-full flex flex-col overflow-hidden px-8 pt-24 md:px-4 md2:px-6 md2:pt-16 md2:justify-center sm:pt-12 sm:px-4">
                        <div className="w-full max-w-[1300px] mx-auto flex items-start justify-between md2:flex-col md2:items-center md2:gap-6 shrink-0">
                            <div className="max-w-[640px] md2:text-center md2:w-full">
                                <div className="fade-in-up delay-100 md2:flex md2:justify-center">
                                    <Logo />
                                </div>

                                <h1 className="mt-8 text-[2.5rem] leading-tight fade-in-up delay-200 sm:text-3xl md2:mt-6">
                                    Build a <strong className="text-blue-500">complete application</strong>, from scratch, with
                                    <strong className="text-blue-500"> React JS</strong>
                                </h1>

                                <p className="mt-4 text-gray-200 leading-relaxed fade-in-up delay-300 sm:text-sm">
                                    In just one week you will master in practice one of the most used and high-demand technologies
                                    to access the best opportunities in the market.
                                </p>
                            </div>

                            <SubscribeForm loading={loading} onSubmit={handleSubscribe} />
                        </div>

                        <div className="flex-1 flex items-end justify-center min-h-0 w-full mt-2 md2:hidden">
                            <img
                                src={mockupImg}
                                alt=""
                                aria-hidden
                                className="mx-auto w-full max-w-[1400px] h-full object-contain object-bottom pointer-events-none fade-in-up delay-300"
                            />
                        </div>

                        <p className="absolute bottom-4 left-0 right-0 z-10 text-center text-sm text-gray-100/90 px-4 fade-in-up delay-700 sm:text-xs sm:bottom-3">
                            Illustrative project for study purposes. Subscription data may be fictitious.
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}
