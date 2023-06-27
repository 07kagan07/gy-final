import { Navigate, useRoutes } from "react-router-dom";
import { useEffect } from "react";
import HomeView from "../Views/Home/HomeView";
import ProductsView from "../Views/Products/ProductsView";
import ProductDetailView from "../Views/ProductDetail/ProductDetailView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import { verifyToken } from "../services/jwt";
import { getCookie } from "../services/userControl";
import { useDispatch, useSelector } from "react-redux";
import { setUser,removeUser } from "../redux/slices/userInfoSlice";

const Route = () => {
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const token = getCookie();
 
 
useEffect(()=>{
    const checkAuth = async()=>{
        if(!token) return dispatch(removeUser())
        const decodedToken =await verifyToken(token)
        dispatch(setUser(decodedToken))
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
      element: user.isAuthenticated ? <ProductsView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/product/:id",
      element: user.isAuthenticated ? <ProductDetailView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element:user.isAuthenticated ? <Navigate to="/" replace /> : <LoginView />,
    },
    {
      path: "/register",
      element:user.isAuthenticated ? <Navigate to="/" replace /> :<RegisterView />,
    }
  ]);

  return routes;
};

export default Route;
