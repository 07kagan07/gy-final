import { Navigate, useRoutes } from "react-router-dom";
import { useLayoutEffect } from "react";
import HomeView from "../Views/Home/HomeView";
import ProductsView from "../Views/Products/ProductsView";
import ProductDetailView from "../Views/ProductDetail/ProductDetailView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import { verifyToken } from "../services/jwt";
import { getCookie } from "../services/userControl";
import { useDispatch } from "react-redux";
import { setUser,removeUser } from "../redux/slices/userInfoSlice";
import BasketView from "../Views/Basket/BasketView";

const Route = () => {
  // const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const token = getCookie();
  console.log(token)
 
 
  useLayoutEffect(()=>{
    const checkAuth = async()=>{
        if(!token) return dispatch(removeUser());
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
      element: token ? <ProductsView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/product/:id",
      element: token ? <ProductDetailView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/basket",
      element: token ? <BasketView /> : <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element:token ? <Navigate to="/" replace /> : <LoginView />,
    },
    {
      path: "/register",
      element:token ? <Navigate to="/" replace /> :<RegisterView />,
    }
  ]);

  return routes;
};

export default Route;
