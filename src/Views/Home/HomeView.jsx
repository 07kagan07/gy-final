import { useEffect, useState } from "react";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { getAllProducts } from "../../services/requests";
import SwiperCard from "../../components/Swiper/SwiperCard";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div className="row g-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <SwiperCard
          cards={products
            .sort(function (a, b) {
              return Math.random() - 0.5;
            })
            .slice(0, 10)}
          setWindow={true}
        />
      </div>
    </>
  );
};

export default HomeView;
