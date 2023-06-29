import { Link,useNavigate } from "react-router-dom"
import logo from "../../assets/monitoLogo.png" 
import styles from "./header.module.css"
import Button from "../Shared/Button"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../redux/slices/userInfoSlice"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { removeCookie } from "../../services/userControl"


const Header = () => {
    const user = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate()
  return (
    <header className="py-3">
        
        {/* Desktop Header */}
        <nav className="container justify-content-between align-items-center d-none d-lg-flex">
            <img className={styles.logo} onClick={()=>navigate("/")} src={logo} alt="logo" />
            <div className="d-flex justify-content-evenly gap-5">
                <Link to="/">Home</Link>
                <Link to="/products">Category</Link>
                <Link to="/product/1">About</Link>
                <Link to="/products">Contact</Link>
            </div>
            <div className={styles.searchBox}>
                <input onFocus={()=>navigate("/products")} type="text" className={styles.searchInput} placeholder="Search something here!" />
            </div>
            {!user.isAuthenticated &&<Button size="m" handleClick={()=>navigate("/login")}>Login</Button>}
            {user.isAuthenticated &&<div className="dropdown">
                <Button rounded="3" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>{user?.userInfo?.payload?.email.split("@")[0]}<i className="fa-solid fa-angle-down"></i>
                </Button>
                <ul className="dropdown-menu w-100">
                    <li><Link className="dropdown-item d-flex justify-content-between align-items-center" to="/basket">Basket<span className="badge bg-danger">2</span></Link></li>
                    <li><button onClick={()=>{navigate("/");dispatch(removeUser());removeCookie()}} className="dropdown-item d-flex justify-content-between align-items-center" href="#">Exit<i className="fa-solid fa-right-from-bracket"></i></button></li>
                </ul>
            </div>}

        </nav>

        {/* Mobile Header */}
        <nav className="container  justify-content-between align-items-center d-flex d-lg-none">
            <i className="fa-solid fa-bars"></i>
            <img src={logo} alt="logo" />
            <button className={styles.searchMobile}>
                
            </button>

        </nav>

        
    </header>
  );
};

export default Header;
