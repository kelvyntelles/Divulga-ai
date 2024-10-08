export function Header() {
    const message = "Olá! Gostaria de saber mais sobre como posso divulgar minha empresa/negócio no Divulga Ai, a plataforma que reúne landing pages e portfólios de empresas. Pode me passar mais informações?";
    const phoneNumber = "5524992281699";

    return (
        <header className="bg-[#1E40AF]">
            <div className="mx-4 md:mx-20 py-4 flex justify-between">
                <h1 className="text-2xl">Divulga ai</h1>
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white py-1 px-4 text-black rounded-xl font-bold hover:bg-green-500 hover:text-white">
                        Divulgue aqui
                    </button>
                </a>
            </div>
        </header>
    );
}


