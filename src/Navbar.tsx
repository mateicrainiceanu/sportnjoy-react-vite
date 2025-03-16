import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<a href="/" className="logo">
						<img 
							width="80" 
							height="80" 
							src="https://sportnjoy.org/wp-content/uploads/2023/10/Logo-SPORTnJOY-03.png" 
							className="custom-logo" 
							alt="Sport n'JOY" 
						/>
					</a>
					<div className="nav-links">
						<a href="/#activities">Activități</a>
						<a href="/#schedule">Program</a>
						<a href="/#pricing">Prețuri</a>
						<a href="/#contact">Contact</a>
						<div className="nav-social-links">
							<a href="https://www.facebook.com/sportt.n.joy" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
								<FaFacebook />
							</a>
							<a href="https://www.instagram.com/sport.n.joy/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
								<FaInstagram />
							</a>
						</div>
						<a href="instructions.html" className="btn btn-primary">
							Începe acum
						</a>
					</div>
					<button className="mobile-menu-btn">
						<span className="menu-icon"></span>
					</button>
				</div>
			</nav>
		</div>
  );
}

export default Navbar