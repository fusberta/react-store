interface ModalProps {
    children: React.ReactNode
    title: string
}

export const Modal = ({ children, title }: ModalProps) => {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0 h-screen">
                <div className="w-2/5 p-5 rounded-lg bg-gray-light absolute top-12 left-1/2 -translate-x-1/2">
                    <h1 className="text-2xl text-center font-semibold mb-5 text-black/50">{ title }</h1>
                    {children}
                </div>
            </div>
        </>
    )
}