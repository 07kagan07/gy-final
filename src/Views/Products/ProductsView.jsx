import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/requests";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { sortProducts } from "../../services/sorts";
import Button from "../../components/Shared/Button";
import PageBanner from "../../components/PageBanner/PageBanner";

const ProductsView = () => {
  const [allProducts, setAllProducts] = useState()
  const [filteredProd, setFilteredProd] = useState()
  const [filter, setFilter] = useState([])
  const [categories, setCategories] = useState()
  const [sortType, setSortType] = useState(null)
  const [priceFilter, setPriceFilter] = useState({min:null,max:null})
  

useEffect(()=>{
  const inital = async()=>{
  const products = await getAllProducts()
  setAllProducts(products)
  setFilteredProd(products)
  const categories = [...new Set(products.map((product)=>product.category))]
  setCategories(categories)
}
inital()
}
,[])

useEffect(()=>{
  const filterProducts = () =>{
    if(filter.length===0) return setFilteredProd(allProducts)
    const filtered = allProducts.filter((product)=>filter.includes(product.category))
    setFilteredProd(filtered)
  }
  filterProducts()
}
,[filter,allProducts,priceFilter])

useEffect(()=>{
  if(sortType) {
  const sorted =sortProducts(allProducts,sortType)
  setAllProducts(sorted)
}
}
,[sortType])


const handleChange = (event) => {
  const { value,checked } = event.target;

  setFilter(
    ()=>checked ? [...filter,value] : [...filter]?.filter((item)=>item!==value)
    
  )
}


const handlePriceFilter = (event) => {
  event.preventDefault();
  if(priceFilter.min==="" && priceFilter.max==="") return setFilteredProd(filteredProd)
  let filtered;
  if(priceFilter.min && !priceFilter.max){
    filtered = filteredProd.filter((product)=>product.price>=priceFilter.min)
  }
  if(priceFilter.max && !priceFilter.min){
    filtered = filteredProd.filter((product)=>product.price<=priceFilter.max)
  }
  if(priceFilter.min && priceFilter.max){
    filtered = filteredProd.filter((product)=>product.price>=priceFilter.min && product.price<=priceFilter.max)
  }
  setFilteredProd(filtered)
};

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Category</li>
        </ol>
      </nav>
    <div className="mb-5">
      <PageBanner/>
    </div>
    <div className="row gap-4">
      <div className="col-md-2 col-sm-12 ">
        <div className="mb-2"><h4>Filter</h4></div>
        <hr />
        <div>
          <h6 className="text-primary">Category</h6>
          {categories && categories.map((category)=>
          <div key={category} className="form-check">
          <input onChange={handleChange}   className="form-check-input" type="checkbox" value={category} id={category}/>
          <label className="form-check-label capitalizeLetter" htmlFor={category}>
            {category}
          </label>
        </div>) }
        </div>
        <hr />
        <div>
          <h6 className="text-primary">Price</h6>
          <form onSubmit={handlePriceFilter}>
            <div className="input-group mb-3 row g-1 mt-2">
            <div className="col-6 text-center">
              <label htmlFor="Min">Min</label>
              <input onChange={(e)=>setPriceFilter({...priceFilter,min:e.target.value})} type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
            </div>
            <div className="col-6 text-center">
            <label htmlFor="Max">Max</label>
              <input onChange={(e)=>setPriceFilter({...priceFilter,max:e.target.value})} type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
            </div>
            <Button type="submit">Search Price</Button>
          </div>
          </form>
        </div>
       
      </div>
      <div className="col-md-9 col-sm-12 row">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h4>Kıyafetler</h4>
          <select onChange={(e)=>setSortType(e.target.value)} className="border border-primary rounded-4 px-3 py-0">
            <option>Sort By</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="exp">Expensive</option>
            <option value="chp">Cheap</option>
            <option value="rt5">Rate(5) </option>
            <option value="rt1">Rate(1)</option>
          </select>
        </div>
        {allProducts&&filteredProd && filteredProd.map((product)=><ProductCard key={product.id} product={product}/>)}
        {filteredProd && filteredProd.length===0 && <h2 className="h-100">There is no product</h2>}
      </div>
    </div>
      
    </>
  )
}

export default ProductsView;