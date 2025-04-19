export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-section">
                    <h3>Sport n&apos;JOY</h3>
                    <p>Destinația ta finală pentru schi, CrossFit și antrenamente bootcamp.</p>
                </div>
                <div className="footer-section">
                    <h4>Link-uri Rapide</h4>
                    <ul>
                        <li><a href="#activities">Activități</a></li>
                        <li><a href="#schedule">Program</a></li>
                        <li><a href="#pricing">Prețuri</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Activități</h4>
                    <ul>
                        <li><a href="#skiing">Schi</a></li>
                        <li><a href="#crossfit">CrossFit</a></li>
                        <li><a href="#bootcamp">Bootcamp</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Conectează-te cu noi</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/sportt.n.joy" aria-label="Facebook">Facebook</a>
                        <a href="https://www.instagram.com/sport.n.joy/" aria-label="Instagram">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Sport n&apos;JOY. Toate drepturile rezervate.</p>
                <p className="designer-credit">© Design by Burghiu Matei</p>
            </div>
        </div>
    </footer>

  )
}
