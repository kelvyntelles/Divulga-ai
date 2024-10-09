'use client'

import Image from "next/image";
import { WhatsappLogo } from "phosphor-react";

export function Logo() {
    const message = "Olá Lucas! Gostaria de agendar um horário em sua barbearia";
    const phoneNumber = "5524974004409";

    return (
        <div className="h-screen bg-cover bg-center relative p-4 md:p-20" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/barbearia.jpg')" }}>
            <div className="flex gap-4">
                <Image  
                    src="/images/barbearia.jpg"
                    width={120}
                    height={120}
                    alt=""
                    className="rounded object-cover border-2 border-[#1E40AF]"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-white text-2xl">Lucas Telles</h1>
                    <p className="text-white text-sm">Barbeiro</p>
                </div>
            </div>

            <div className="mt-8 md:w-2/4">
                <p className="text-gray-300 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum 
                    at mi vitae consequat. Mauris sollicitudin orci vehicula, dapibus orci congue, 
                    dapibus enim. Nullam eleifend at neque a pellentesque. Proin sit amet sem massa. 
                    Fusce tempor ornare imperdiet. In hac habitasse platea dictumst. Cras vitae 
                    ligula et nunc iaculis posuere.
                </p>
            </div>

            <div className="mt-52 md:mt-4">
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="
                        bg-[#1E40AF] 
                        font-bold 
                        w-full md:w-2/4 
                        p-2 
                        rounded 
                        flex 
                        gap-2 
                        justify-center
                        hover:bg-green-700
                    ">
                        <WhatsappLogo size={20} />
                        Marcar Horário
                    </button>
                </a>
            </div>
        </div>
    )
}
