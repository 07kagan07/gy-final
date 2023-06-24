import { useRoutes } from "react-router-dom"
import HomeView from "../Views/Home/HomeView"
import ProductsView from "../Views/Products/ProductsView"
import ProductDetailView from "../Views/ProductDetail/ProductDetailView"

const Route = () => {
    const routes=useRoutes([
        {
            path: "/",
            element: <HomeView/>,
        },
        {
            path: "/products",
            element: <ProductsView/>,
        }
        ,
        {
            path: "/products/:id",
            element: <ProductDetailView/>,
        },
    ])
  return routes;
}

export default Route