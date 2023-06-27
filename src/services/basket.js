import { getAllProducts } from "./requests"

export const getBasketItems = async (id) => {
    const products = await getAllProducts();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/basket?userId=${id}`)
    const basket = await response.json()
    const basketItems = basket[0].prod.map((item) => {
        const productMatch = products.find((product) => product.id === item.productId);
        return {
            product: productMatch,
            quantity: item.quantity
        }
    });
    console.log(basket[0].prod)
    console.log(basketItems)
    return basketItems
}
