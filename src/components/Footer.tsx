import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="https://sportnjoy.org/wp-content/uploads/2023/10/Logo-SPORTnJOY-03.png" 
              alt="Sport n'JOY" 
              className="footer-logo"
            />
            <p className="footer-description">
              Destinația ta finală pentru schi, CrossFit și antrenamente bootcamp.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Link-uri Rapide</h4>
              <ul className="footer-list">
                <li><a href="#activities">Activități</a></li>
                <li><a href="#schedule">Program</a></li>
                <li><a href="#pricing">Prețuri</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Activități</h4>
              <ul className="footer-list">
                <li><a href="#skiing">Schi</a></li>
                <li><a href="#crossfit">CrossFit</a></li>
                <li><a href="#bootcamp">Bootcamp</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Conectează-te</h4>
              <div className="footer-social">
                <a href="https://www.facebook.com/sportt.n.joy" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/sport.n.joy/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <h4 className="footer-title">Documente Legale</h4>
          <div className="footer-legal-links">
            <a href="/politica-de-confidentialitate" className="legal-link">Politică de confidențialitate</a>
            <a href="/politica-cookie" className="legal-link">Politica cookie</a>
            <a href="/termeni-si-conditii" className="legal-link">Termeni și condiții</a>
            <a href="/anpc" className="legal-link">ANPC</a>
            <a href="/regulament-de-functionare" className="legal-link">Regulament de funcționare</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Sport n'JOY. Toate drepturile rezervate.</p>
          <p className="designer-credit">© Design by Burghiu Matei</p>
        </div>
      </div>
    </footer>
  );
}
