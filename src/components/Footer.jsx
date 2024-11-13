import "../style/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <section className="footer-container">

        <h1>Bilfirma</h1>

        <hr/>

        <div className="contacts">
          <a href="https://se.linkedin.com/company/biltema">
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
          </a>
          <a href="https://www.instagram.com/biltemasverige/">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>

        <hr/>

        <div className="copyright">
          <p>©2024 Bilfirma AB All rights reserved</p>
        </div>

      </section>
    </footer>

  );
};