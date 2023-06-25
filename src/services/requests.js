export const getAllProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
    return await response.json()
}
