import { Link } from "react-router";
import "../style/Header.css"
import logo from "../assets/logo-small.png"


export default function Header () {

    return (

        <header className="site-header">
            <div className="site-header__inner">

            {/* Logo */}
            <Link to="/" className="site-header_logo">
              <img src={logo} alt="Logo"/>
            </Link>

            {/* Navigation */}
            <nav className="site-header__nav">
                <Link to="/shop" className="site-header__nav-link">SHOP</Link>
                <Link to="/about" className="site-header__nav-link">ABOUT US</Link>
                <Link to="/contact" className="site-header__nav-link">CONTACT US</Link>
            </nav>

            {/* Search */}
            <div className="site-header__search">
                <input type="text" placeholder="Search products..." className="site-header__search-input"/>
                <button className="site-header__icon">👤</button>
                <button className="site-header__icon">🛒</button>
            </div>

            </div>
        
        </header>

    )
}