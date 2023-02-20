interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className="text-center text-lg text-orange-200">{ error }</p>
    )
}