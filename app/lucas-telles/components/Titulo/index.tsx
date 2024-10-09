interface Props {
    titulo: string;
}

export function Titulo({titulo}: Props) {
    return (
        <h1 className="text-xl">{titulo}</h1>
    )
}
