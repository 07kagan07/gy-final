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

  console.log(basket)

  return (
    <div>
      <input type="text" value={"ORuchan"} className="border-0" disabled={true}/>
    </div>
  )
}

export default BasketView