import { useEffect, useState } from "react"
import { getBasketItems } from "../../services/basket"
import { useSelector } from "react-redux";
import BasketItem from "../../components/Basket/BasketItem";

const BasketView = () => {
  const user = useSelector((state) => state.userInfo.userInfo);
  const [basket, setBasket] = useState([])
  const [flag, setFlag] = useState(false)
  const [basketTotalPrice, setBasketTotalPrice] = useState(0)


  useEffect(()=>{
    getBasketItems(user?.payload?.id).then((res)=>setBasket(res)).then(()=>setFlag(false))
  }
  ,[user,flag])

  useEffect(() => {
    const totalPrice = basket?.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);

    setBasketTotalPrice(totalPrice);
    setFlag(false)
  }
  , [basket,flag])
  return (
    <div>
      {!basket&&<h2>Empty Basket</h2>}
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-8 col-sm-12">
        {basket&&basket?.map((basketItem)=>
        <BasketItem
          key={basketItem.product.id} 
          setBasketTotalPrice={setBasketTotalPrice}
          basketItem={basketItem}
          basketTotalPrice={basketTotalPrice}
          setFlag={setFlag}
          />)}
        </div>
        <div className="col-lg-4 col-sm-12">${basketTotalPrice?.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default BasketView