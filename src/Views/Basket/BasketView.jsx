import { useEffect, useState } from "react"
import { getBasketItems } from "../../services/basket"
import { useSelector } from "react-redux";

const BasketView = () => {
  const user = useSelector((state) => state.userInfo.userInfo);
const [basket, setBasket] = useState([])


  useEffect(()=>{
    getBasketItems(user.payload.id).then((res)=>setBasket(res))
  }
  ,[user])
  return (
    <div>

    </div>
  )
}

export default BasketView