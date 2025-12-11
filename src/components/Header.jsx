import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Header () {

    return (

        <header className="site-header">
            <div className="site-header__inner">

            {/* Logo */}
            <Link to="/" className="site-header_logo">
              <img src={logo} alt="HI-FI Horizon logo"/>
            </Link>

            {/* Navigation */}
            <nav className="site-header__nav">
                <Link to="/shop" className="site-header__nav-link">SHOP</Link>
                <Link to="/about" className="site-header__nav-link">ABOUT US</Link>
                <Link to="/contact" className="site-header__nav-link">CONTACT US</Link>
            </nav>

                
            </div>

            

        
          
        
        </header>

    )
}