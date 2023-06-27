
const BasketItem = ({basketItem}) => {
  
   
    console.log(basketItem)
    return <div>{basketItem.product.title} ${basketItem.product.price*basketItem.quantity}</div>;
}

export default BasketItem;
