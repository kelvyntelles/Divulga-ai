interface Props {
    servico: string;
}

export function TipoServico({servico}: Props) {
    return (
        <div className="p-2 text-center border-2 border-[#1E40AF] hover:bg-[#1E40AF]">
            {servico}
        </div>
    )
}


