import React from 'react'
import { NavType } from './Navbar';

interface Nav {
    tp: NavType;
    text?: string;
    href: string;
    icon?: React.ReactNode;
    label?: string;
}

function NavItem({nav}: {nav: Nav}) {
  if (nav.tp === NavType.TEXT) {
		return (
			<a href={nav.href}>
				{nav.text}
			</a>
		);
  } else if (nav.tp === NavType.BUTTON) {
		return (
			<a href={nav.href} className="btn btn-primary color-white">
				{nav.text}
			</a>
		);
  } else if (nav.tp === NavType.ICON) {
		return (
			<div className="nav-social-links">
				<a href={nav.href} aria-label={nav.label} target="_blank" rel="noopener noreferrer">
					{nav.icon}
				</a>
			</div>
		);
  } else {
		throw new Error("Invalid nav type");
  }
}

export default NavItem