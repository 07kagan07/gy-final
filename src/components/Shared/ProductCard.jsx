/* eslint-disable no-unused-vars */
const ProductCard = ({ product }) => {
  product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const { id, title, price, category, image, rating } = product;

  const starRating = (stars) => "★★★★★✩✩✩✩✩".slice(5 - stars, 10 - stars);
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div
        className="d-flex flex-column w-100 rounded"
        style={{
          boxShadow: "0px 4px 28px -2px rgba(0, 0, 0, 0.08)",
          maxWidth: "auto",
          background: "##FDFDFD",
        }}
      >
        <img src={image} alt="product image" className="m-2 rounded p-4" />
        <div>
        <p
              className="border rounded p-1 m-2 bg-primary text-white category"
              style={{ maxWidth: "max-content",textTransform:'capitalize',fontSize:'0.8rem' }}
            >
              {category}
            </p>
          <p className="m-2" style={{ maxWidth: "max-content" }}>
            {title}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            
            <div className="d-flex align-items-center m-2 gap-2">
              <p className="m-0 text-warning">
                {starRating(Math.round(rating.rate))}
              </p>{" "}
              <p className="m-0 text-black">{rating.rate}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-2">{rating.count} Stock</p>
            <p className="m-2">{price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
