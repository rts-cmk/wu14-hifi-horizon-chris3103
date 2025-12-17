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
            <nav className="header-container">
                <a href="/shop" className="site-header__nav-link">SHOP</a>
                <a to="/about" className="site-header__nav-link">ABOUT US</a>
                <a to="/contact" className="site-header__nav-link">CONTACT US</a>
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