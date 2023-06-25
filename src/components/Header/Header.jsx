import { Link,useNavigate } from "react-router-dom"
import logo from "../../assets/monitoLogo.png" 
import styles from "./header.module.css"
import Button from "../Shared/Button"


const Header = () => {
    const navigate = useNavigate()
  return (
    <header className="py-3">
        {/* Desktop Header */}

        <nav className="container justify-content-between align-items-center d-none d-lg-flex">
            <img className={styles.logo} onClick={()=>navigate("/")} src={logo} alt="logo" />
            <div className="d-flex justify-content-evenly gap-5">
                <Link to="/">Home</Link>
                <Link to="/products">Category</Link>
                <Link to="/products">About</Link>
                <Link to="/products">Contact</Link>
            </div>
            <div className={styles.searchBox}>
                <input type="text" className={styles.searchInput} placeholder="Search something here!" />
            </div>
            <Button size="m" handleClick={()=>navigate("/login")}>Login</Button>

        </nav>

        {/* Mobile Header */}

        <nav className="container  justify-content-between align-items-center d-flex d-lg-none">
        <i className="fa-solid fa-bars"></i>
            <img src={logo} alt="logo" />
            <button className={styles.searchMobile}>
                
            </button>

        </nav>

        
    </header>
  )
}

export default Header