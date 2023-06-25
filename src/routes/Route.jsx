import { useRoutes } from "react-router-dom"
import HomeView from "../Views/Home/HomeView"
import ProductsView from "../Views/Products/ProductsView"
import ProductDetailView from "../Views/ProductDetail/ProductDetailView"
import LoginView from "../Views/Login/LoginView"
import RegisterView from "../Views/Register/RegisterView"

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
        {
            path: "/login",
            element: <LoginView/>,
        },
        {
            path: "/register",
            element: <RegisterView/>,
        },
    ])
  return routes;
}

export default Route