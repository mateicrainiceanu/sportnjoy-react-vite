import {FaFacebook, FaInstagram} from "react-icons/fa";
import NavItem from "./NavItem";

export enum NavType {
	TEXT,
	BUTTON,
	ICON,
}

function Navbar() {
	const pathname = window.location.pathname;

	const navs = [
		{
			tp: NavType.TEXT,
			text: "Acasă",
			href: "/",
			show: pathname !== "/",
		},
		{
			tp: NavType.TEXT,
			text: "Activități",
			href: "/#activities",
			show: pathname === "/",
		},
		{
			tp: NavType.TEXT,
			text: "Program",
			href: "/#schedule",
			show: pathname === "/",
		},
		{
			tp: NavType.TEXT,
			text: "Prețuri",
			href: "/#pricing",
			show: pathname === "/",
		},
		{
			tp: NavType.TEXT,
			text: "Contact",
			href: "/#contact",
			show: pathname === "/",
		},
		{
			tp: NavType.ICON,
			icon: <FaFacebook />,
			label: "Facebook",
			href: "https://www.facebook.com/sportt.n.joy",
			show: true,
		},
		{
			tp: NavType.ICON,
			icon: <FaInstagram />,
			label: "Instagram",
			href: "https://www.instagram.com/sport.n.joy/",
			show: true,
		},
		{
			tp: NavType.BUTTON,
			text: "Începe acum",
			href: "/instructions",
			show: pathname === "/",
		},
	];

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
						{navs.filter(item => item.show).map((nav, idx) => <NavItem key={idx} nav={nav} />)}
					</div>
					<button className="mobile-menu-btn">
						<span className="menu-icon"></span>
					</button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
