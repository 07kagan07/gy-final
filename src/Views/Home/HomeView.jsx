import Button from "../../components/Shared/Button"

const HomeView = () => {

  const handleClick = () => {
    console.log("Hello")
  }

  return (
    <Button disabled={true} isIconExist={true} handleClick={handleClick} size="m">Butona Tıkla</Button>
  )
}

export default HomeView