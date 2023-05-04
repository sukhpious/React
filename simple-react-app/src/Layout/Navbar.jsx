import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/PhotoRoom.PNG";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import whatsApp from "../assets/whatsApp.png";
const Navbar = () => {
	return (
		<nav className="flex flex-row font-serif flex gap-6 py-4 px-2">
			<ul className="flex basis-1/4 justify-start gap-2">
				<li>
					<img src={instagram} alt="Instagram Logo" className="w-48 md:w-16 lg:w-4" />
				</li>
				<li>
					<img src={facebook} alt="Facebook Logo" className="w-48 md:w-16 lg:w-4" />
				</li>
			</ul>
			<ul className="basis-1/2 flex justify-center gap-6">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<img src={logo} alt="logo" className="w-48 md:w-16 lg:w-16" />
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
				<li>
					<Link to="/">Collection</Link>
				</li>
			</ul>
			<ul className="flex basis-1/4 justify-end gap-2">
				<li>
					<img src={whatsApp} alt="WhatsApp Logo" className="w-48 md:w-16 lg:w-4" />
				</li>
				<li>
					<Link to="/">Collection</Link>
				</li>
				<li>
					<img src={whatsApp} alt="WhatsApp Logo" className="w-48 md:w-16 lg:w-4" />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
