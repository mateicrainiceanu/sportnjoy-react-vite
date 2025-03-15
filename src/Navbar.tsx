
function Navbar() {
  return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<a href="/" className="logo">
						Sport n&apos;JOY
					</a>
					<div className="nav-links">
						<a href="/#activities">Activități</a>
						<a href="/#schedule">Program</a>
						<a href="/#pricing">Prețuri</a>
						<a href="/#contact">Contact</a>
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