import { useEffect, useState } from "react";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { getAllProducts } from "../../services/requests";
import SwiperCard from "../../components/Swiper/SwiperCard";
import Banner from "../../components/Banner/Banner";
import styles from "./homeView.module.css";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <Banner />
      <div className={`row g-3 ${styles["page-content"]}`}>
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
