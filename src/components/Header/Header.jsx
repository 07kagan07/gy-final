import { Link } from "react-router-dom"
import logo from "../../assets/monitoLogo.png" 
import styles from "./header.module.css"


const Header = () => {
  return (
    <header className="py-3">
        {/* Desktop Header */}

        <nav className="container justify-content-between align-items-center d-sm-none d-md-flex">
            <img src={logo} alt="logo" />
            <div className="d-flex justify-content-evenly w-100">
                <Link to="/">Home</Link>
                <Link to="/products">Category</Link>
                <Link to="/products">About</Link>
                <Link to="/products">Contact</Link>
            </div>
            <div className={styles.searchBox}>
                <input type="text" className={styles.searchInput} placeholder="Search" />
            </div>

        </nav>

        {/* Mobile Header */}

        <nav className="container d-flex justify-content-between align-items-center d-none d-sm-block d-md-none">
            <img src={logo} alt="logo" />
            <div className="d-flex justify-content-evenly w-100">
                <Link to="/">Mobil Home</Link>
                <Link to="/products">Category</Link>
                <Link to="/products">About</Link>
                <Link to="/products">Contact</Link>
            </div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Arama"/>
                <div className="input-group-prepend">
                    <span className="input-group-text"> 
                    <i className="fa fa-search"></i> 
                    </span>
                </div>
            </div>

        </nav>

        
    </header>
  )
}

export default Header