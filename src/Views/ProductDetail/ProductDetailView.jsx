/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"

const ProductDetailView = () => {

  const { id } = useParams()
  

  return (
    <div>{id}</div>
  )
}

export default ProductDetailView