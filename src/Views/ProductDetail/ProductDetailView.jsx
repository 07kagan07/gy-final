/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllProducts, getProductById } from "../../services/requests"
import styles from "./productDetailView.module.css"
import SwiperCard from "../../components/Swiper/SwiperCard"
import Button from "../../components/Shared/Button"

const ProductDetailView = () => {
const [product, setProduct] = useState()
const [products, setProducts] = useState()

  const { id } = useParams()
  
useEffect(()=>{
getProductById(id).then(res=>setProduct(res))
getAllProducts().then(res=>setProducts(res))
},[id])
  return (
    <>{product&&
    <div className={`row mt-lg-3 mt-0 ${styles.detailWrap} p-0 p-lg-5`}>
      <div className="col-lg-6 col-sm-12 px-1 px-lg-5">
        <img src={product.image}  alt={product.title} className="img-fluid rounded-0 rounded-lg-3 px-0 px-lg-5" />
      </div>
      <div className="col-lg-6 col-sm-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item "><Link to="/products">Category</Link></li>
          <li className="breadcrumb-item active text-capitalize" aria-current="page">{product.category}</li>
        </ol>
      </nav>
        <h4>{product.title}</h4>
        <Button>Add to Basket</Button>
      </div>
    </div>
    }
    
    {products&&<SwiperCard
            cards={products?.sort(function (a, b) {return Math.random() - 0.5;}).slice(0, 10)}
            setWindow={true}
          />}
    
    </>
  )
}

export default ProductDetailView