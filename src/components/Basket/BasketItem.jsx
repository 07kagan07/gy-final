
const BasketItem = ({basketItem}) => {
  
   
    console.log(basketItem)
    return <div className="w-100 border rounded-3 row p-2 mb-3">
            <div className="col-lg-2 col-sm-12 ">
                <img src={basketItem.product.image} className="img-fluid rounded-3" alt="product" />
                <div className="d-flex my-2">
                    <button>-</button>
                    <input className="w-100 text-ce" type="number" value={basketItem.quantity} />
                    <button>+</button>
                </div>
            </div>
            <div className="col-lg-10 col-sm-12 d-flex flex-column justify-content-between ">
                <h5>{basketItem.product.title}</h5>
                <div className="d-flex justify-content-end align-items-end flex-column">
                    <h6>${basketItem.quantity*basketItem.product.price}</h6>
                </div>
            </div>

        </div>;
}

export default BasketItem;


// ${basketItem.product.price*basketItem.quantity}