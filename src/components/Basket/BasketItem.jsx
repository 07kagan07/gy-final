import { useState } from "react";
import styles from "./basketItem.module.css"
import Button from "../Shared/Button";
import { updateItemQuantity } from "../../services/basket";
import { useSelector } from "react-redux";

const BasketItem = ({basketItem,setFlag}) => {
    const user = useSelector((state) => state.userInfo.userInfo);
    const [count, setCount] = useState(basketItem.quantity)
  
    const handleCountChange =async () => {
        await updateItemQuantity(user?.payload?.id, basketItem.product.id, count)
        setFlag(true)
    }
    
   
    
   
    console.log(basketItem)
    return <div className="w-100 border rounded-3 row p-2 mb-3">
            <div className="col-lg-2 col-sm-12 d-flex align-items-center flex-column">
                <img src={basketItem.product.image} className="img-fluid rounded-3" alt="product" />
                <div className={styles.counter}>
                    <button
                    className={`${styles["count-button"]} ${styles.dec}`}
                    onClick={() => {
                        if (count > 1) {
                        setCount(count - 1);
                        handleCountChange()
                        }
                    }}
                    disabled={count <= 1}
                    >
                    -
                    </button>
                    <input
                    type="number"
                    value={count}
                    className={styles.input}
                    onChange={(e) => {setCount(Number(e.target.value));handleCountChange()}}
                    onBlur={() => {
                        count <= 1 && setCount(1);
                        count >= basketItem.product.rating.count &&
                        setCount(basketItem.product.rating.count);
                        handleCountChange();
                    }}
                    />
                    <button
                    className={`${styles["count-button"]} ${styles.inc}`}
                    onClick={() => {
                        if (count < basketItem.product.rating.count) {
                        setCount(count + 1);
                        handleCountChange();
                        }
                    }}
                    disabled={count === basketItem.product.rating.count}
                    >
                    +
                    </button>
              </div>
            </div>
            <div className="col-lg-10 col-sm-12 d-flex flex-column justify-content-between ">
                <div className="d-flex justify-content-between">
                    <h5>{basketItem.product.title}</h5>
                    <Button className="btn btn-danger"><i className="fa-solid fa-trash"></i></Button>
                    </div>
                <div className="d-flex justify-content-end align-items-end flex-column">
                    <h6>${count*basketItem.product.price}</h6>
                </div>
            </div>

        </div>;
}

export default BasketItem;


// ${basketItem.product.price*basketItem.quantity}