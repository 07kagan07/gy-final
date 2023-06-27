import { useEffect, useState } from "react"
import { getBasketItems } from "../../services/basket"
import { useSelector } from "react-redux";
import BasketItem from "../../components/Basket/BasketItem";

const BasketView = () => {
  const user = useSelector((state) => state.userInfo.userInfo);
const [basket, setBasket] = useState([])


  useEffect(()=>{
    getBasketItems(user?.payload?.id).then((res)=>setBasket(res))
  }
  ,[user])
  console.log(basket)
  return (
    <div>
{basket&&basket?.map((basketItem)=><BasketItem key={basketItem.product.id} basketItem={basketItem}/>)}
    </div>
  )
}

export default BasketView