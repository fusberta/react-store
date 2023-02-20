import { useState } from "react"
import { ErrorMessage } from "./error-message"

export const CreateProduct = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    function submitHandler(e: React.FormEvent) {
        e.preventDefault()

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
    }

    function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="rounded-md w-full py-2 px-4 mb-4" 
                placeholder="Enter product price" value={value} onChange={changeHandle}/>
            { error && <ErrorMessage error={ error }/> }
            <button className="py-2 px-4 rounded border bg-orange-100 text-gray-dark hover:bg-gray-dark 
                hover:text-orange-100 transition-all duration-300 float-right">Create Product</button>
        </form>
    )
}