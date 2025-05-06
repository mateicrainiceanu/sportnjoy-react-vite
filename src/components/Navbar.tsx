import {FaFacebook, FaInstagram} from "react-icons/fa";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import NavItem from "./NavItem";
import {useState} from "react";

export enum NavType {
	TEXT,
	BUTTON,
	ICON,
}

function Navbar() {

	const [isOpen, setIsOpen] = useState(false);

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

	function toggleMenu() {
		setIsOpen(val => !val);
	}

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
					{isOpen && <div className="nav-links-mobile">
						{navs.filter(item => item.show).map((nav, idx) => <NavItem key={idx} nav={nav}/>)}
					</div>}
					<button className="mobile-menu-btn" onClick={toggleMenu}>
						{!isOpen ?
							<IoMdMenu size={24}/> :
							<IoIosClose size={30}/>}
					</button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
