import Button from "../../components/Shared/Button";
import InputField from "../../components/Shared/InputField";

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
    </>
  );
};

export default HomeView;
