import { Navigate, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeView from "../Views/Home/HomeView";
import ProductsView from "../Views/Products/ProductsView";
import ProductDetailView from "../Views/ProductDetail/ProductDetailView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import { verifyToken } from "../services/jwt";
import { getCookie } from "../services/userControl";

const Route = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = getCookie();
 
 
useEffect(()=>{
    const checkAuth = async()=>{
        if(!token) return setIsAuthenticated(false)
        const auth =await verifyToken(token)
        setIsAuthenticated(auth)
    }

    checkAuth()
}
,[token])



  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/products",
      element: isAuthenticated ? <ProductsView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/product/:id",
      element:isAuthenticated ? <ProductDetailView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element:isAuthenticated ? <Navigate to="/" replace /> : <LoginView />,
    },
    {
      path: "/register",
      element:isAuthenticated ? <Navigate to="/" replace /> :<RegisterView />,
    }
  ]);

  return routes;
};

export default Route;
