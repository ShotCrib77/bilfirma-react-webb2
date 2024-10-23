import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../style/Navbar.css";

export default function Navar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("mobile-nav")
  }

  return(
    <header> 
      <h1>Bilfirma</h1>
      <nav ref={navRef}>
        <a href="/#">Hem</a>
        <a href="/#">Våra bilar</a>
        <a href="/#">Vår personal</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes/> </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}