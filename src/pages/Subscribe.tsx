import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateSubscriberMutation } from "../graphql/generated";
import { Logo } from "../components/Logo";

import imgUrl from '../../src/assets/mockup.png'


export function Subscribe() {
    const navigate = useNavigate()
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    async function handleSubscribe(e: FormEvent) {
        e.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-28 mx-auto md2:flex-col md2:gap-16 md:px-8 sm:my-8">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com 
                        <strong className="text-blue-500"> React JS</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e 
                        com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded min-w-[400px] max-w-[640px] md2:w-full sm:min-w-0">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            placeholder="Seu nome completo" 
                            className="bg-gray-900 rounded px-5 h-14"
                            onChange={e => setName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Digite seu e-mail" 
                            className="bg-gray-900 rounded px-5 h-14"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-purple-500 py-4 rounded font-bold text-sm transition-colors disabled:opacity-70"
                        >
                            { loading ? 'Carregando' : 'Garantir minha vaga'}
                        </button>
                    </form>
                </div>
            </div>

            <img src={imgUrl} className="mt-10 md2:absolute md2:-z-10 md2:top-1/2 md2:-translate-y-1/2" alt="Mockup" />
        </div>
    )
}