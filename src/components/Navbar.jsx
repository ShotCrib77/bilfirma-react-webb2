import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";


export default function Navar() {

  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("mobile-nav")
  }

  return(
    <header> 
      <h1>Bilfirma</h1>
      <nav ref={navRef}>
        <Link to="/">Hem</Link>
        <Link to="/bilar">Våra bilar</Link>
        <Link to="/personal">Vår personal</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}