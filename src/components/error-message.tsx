interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className="text-center text-lg text-orange pt-16">{ error }</p>
    )
}