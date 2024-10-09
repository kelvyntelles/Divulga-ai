'use client'

import Image from 'next/image';
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { TipoServico } from "./components/TipoServico";
import { Titulo } from "./components/Titulo";
import { WhatsappLogo } from 'phosphor-react';
import Link from 'next/link';

export default function LucasTelles() {
    const message = "Olá Lucas! Gostaria de agendar um horário em sua barbearia";
    const phoneNumber = "5524974004409";

    return (
        <>
            <Header />
            <Logo />

            <div className="mx-4 mt-10 md:mx-20">
                <Titulo titulo="Serviços Oferecidos" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                    <TipoServico servico="Corte Social" />
                    <TipoServico servico="Degrade" />
                    <TipoServico servico="Barba" />
                    <TipoServico servico="Sobrancelha" />
                </div>
            </div>

            <div className="mx-4 mt-10 md:mx-20">
                <Titulo titulo="Galeria de Fotos" />
                <div className="
                    flex 
                    mt-4 
                    overflow-x-scroll 
                    space-x-4 
                    md:grid 
                    md:grid-cols-5
                    md:space-x-0 
                    md:overflow-x-visible
                    md:gap-3
                ">
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                    <Image
                        src="/images/barbearia.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className="rounded-sm"
                    />
                </div>
            </div>

            <div className="mx-4 mt-10 md:mx-20">
                <Titulo titulo="Localização" />
                <div className="flex justify-center items-center mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59021.10845698299!2d-43.707371113314295!3d-22.39816937319674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9930e80a551187%3A0x1beb6ddecd8e98be!2sVassouras%2C%20RJ%2C%2027700-000!5e0!3m2!1spt-BR!2sbr!4v1728481489861!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-lg w-full h-96 md:w-3/4"
                    ></iframe>
                </div>
            </div>

            <div className="mx-4 mt-10 md:mx-20">
                <Titulo titulo="Contatos" />
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="
                            border-2
                            border-[#1E40AF]
                            font-bold 
                            w-full 
                            p-2 
                            rounded 
                            flex 
                            gap-2 
                            justify-center
                            hover:bg-green-700
                            hover:border-green-700
                        ">
                            <WhatsappLogo size={20} />
                            WhatsApp
                        </button>
                    </a>

                    <Link href="https://www.instagram.com/lctelles07/" target="_blank">
                        <button className="
                            border-2
                            border-[#1E40AF]
                            font-bold 
                            w-full 
                            p-2 
                            rounded 
                            flex 
                            gap-2 
                            justify-center
                            hover:bg-red-800
                            hover:border-red-800
                        ">
                            <WhatsappLogo size={20} />
                            Instagram
                        </button>
                    </Link>
                </div>
            </div>

            <footer className='text-center py-1 mt-10 text-sm'>
                Desenvolvido por Kelvyn Telles.
            </footer>
        </>
    )
}


