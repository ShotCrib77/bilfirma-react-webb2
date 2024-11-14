import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";


export default function Navar() {

  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("mobile-nav")
  }

  const closeNavbar = () => {
    navRef.current.classList.remove("mobile-nav");
  };

  return(
    <header> 
      <h1>Bilfirma</h1>
      <nav ref={navRef}>
        <Link to="/" onClick={closeNavbar}>Hem</Link>
        <Link to="/bilar" onClick={closeNavbar}>Våra bilar</Link>
        <Link to="/personal" onClick={closeNavbar}>Vår personal</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}