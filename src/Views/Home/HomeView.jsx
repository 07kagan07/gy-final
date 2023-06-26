import { useEffect, useState } from "react";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { getAllProducts } from "../../services/requests";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div className="row g-3">
        {products.map((product) =><ProductCard key={product.id} product={product}/>) }
      </div>
    </>
  );
};

export default HomeView;
