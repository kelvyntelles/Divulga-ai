'use client'

import Link from "next/link";
import { MapPin } from "phosphor-react"

export function Header() {
    return (
        <header className="bg-[#1E40AF]">
            <div className="mx-4 md:mx-20 py-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl">Divulga ai</h1>
                </Link>
                <div className="flex gap-1">
                    <MapPin size={20} />
                    <span>Vassouras, RJ</span>
                </div>
            </div>
        </header>
    );
}

