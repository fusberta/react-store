import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios, { AxiosError } from "axios"

export function useProduct() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
  
    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products?limit=16')
            setProducts(response.data)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
        
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])

    return { products, error, loading }
}