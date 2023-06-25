import Button from "../../components/Shared/Button";
import InputField from "../../components/Shared/InputField";
import ProductCard from "../../components/Shared/ProductCard";

const HomeView = () => {
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <>
      <Button
        disabled={true}
        isIconExist={true}
        handleClick={handleClick}
        size="m"
      >
        Butona Tıkla
      </Button>
      <InputField
        label="Merhaba"
        typeName="password"
        placeholder="Type something here!"
      />
      <div className="form-check">
        <input
          className="form-check-input"
          disabled
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default HomeView;
