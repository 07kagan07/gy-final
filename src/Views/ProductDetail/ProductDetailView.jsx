import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../services/requests";
import styles from "./productDetailView.module.css";
import SwiperCard from "../../components/Swiper/SwiperCard";
import Button from "../../components/Shared/Button";
import Magnifier from "react-magnifier";
import { useSelector } from "react-redux";

const ProductDetailView = () => {
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();
  const [count, setCount] = useState(1);
  const [changesMade, setChangesMade] = useState(false);

  const { id } = useParams();

  const user = useSelector((state) => state.userInfo.userInfo);

  const role = user?.payload?.role;

  const starRating = (stars) => "★★★★★✩✩✩✩✩".slice(5 - stars, 10 - stars);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
    getAllProducts().then((res) => {
      const sortedProducts = res.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      setProducts(sortedProducts);
    });
  }, [id]);

  const handleInputChange = () => {
    if (!changesMade) {
      setChangesMade(true);
    }
  };

  return (
    <>
      {product && (
        <div className={`row mt-lg-3 mt-0 ${styles.detailWrap} p-0 p-lg-5`}>
          <div className="col-lg-6 col-sm-12 px-1 px-lg-5">
            <Magnifier
              src={product.image}
              width="100%"
              className="img-fluid rounded-0 rounded-lg-3 px-0 px-lg-5"
            />
          </div>
          <div className="d-flex flex-column justify-content-between col-lg-6 col-sm-12 py-2 py-lg-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item ">
                  <Link to="/products">Category</Link>
                </li>
                <li
                  className="breadcrumb-item active text-capitalize"
                  aria-current="page"
                >
                  {product.category}
                </li>
              </ol>
            </nav>
            <textarea
              value={product.title}
              className={styles.title}
              disabled={role !== "admin"}
              onChange={handleInputChange}
            />
            <textarea
              value={product.category}
              className={styles.category}
              disabled={role !== "admin"}
              onChange={handleInputChange}
            />
            <textarea
              value={product.description}
              className={styles.description}
              disabled={role !== "admin"}
              onChange={handleInputChange}
            />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <p className="m-0 text-warning">
                  {starRating(Math.round(product.rating.rate))}
                </p>{" "}
                <p className="m-0 text-black">{product.rating.rate}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="d-flex">
                <input
                  value={product.rating.count}
                  className={styles.stock}
                  disabled={role !== "admin"}
                  onChange={handleInputChange}
                />
                <p className="m-0"> Stock</p>
              </div>
              <div className="d-flex align-items-center text-success">
                <p className="m-0">$</p>
                <input
                  value={product.price}
                  className={styles.price}
                  disabled={role !== "admin"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles["counter-wrapper"]}>
              <div className={styles.counter}>
                <button
                  className={`${styles["count-button"]} ${styles.dec}`}
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
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
                  onChange={(e) => setCount(Number(e.target.value))}
                  onBlur={() => {
                    count <= 1 && setCount(1);
                    count >= product.rating.count &&
                      setCount(product.rating.count);
                  }}
                />
                <button
                  className={`${styles["count-button"]} ${styles.inc}`}
                  onClick={() => {
                    if (count < product.rating.count) {
                      setCount(count + 1);
                    }
                  }}
                  disabled={count === product.rating.count}
                >
                  +
                </button>
              </div>
              <Button>Add to Basket</Button>
              {changesMade && (
                <button
                  className={styles.save}
                  onClick={() => setChangesMade(false)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="my-5">
        <h4>Popular products based on this item</h4>
        {products && (
          <SwiperCard cards={products.slice(0, 10)} setWindow={true} />
        )}
      </div>
    </>
  );
};

export default ProductDetailView;
