import "./Hero.css";
import { useState } from "react";

const backGroundLinks = [
	"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
	"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
	"https://images.unsplash.com/photo-1596436889106-be35e843f974?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	"https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
];

function Hero() {
	const [nroBgLink, setNroBgLink] = useState(1);

	function changeBgHandler(forward) {
		if (forward) {
			if (nroBgLink == backGroundLinks.length - 1) {
				setNroBgLink(0);
			} else {
				setNroBgLink((prev) => prev + 1);
			}
		} else {
			if (nroBgLink == 0) {
				setNroBgLink(backGroundLinks.length - 1);
			} else {
				setNroBgLink((prev) => prev - 1);
			}
		}
	}

	return (
		<div className="Hero" style={{ backgroundImage: `url(${backGroundLinks[nroBgLink]})` }}>
			<button onClick={() => changeBgHandler(false)}>ᐸ</button>
			<button onClick={() => changeBgHandler(true)}>ᐳ</button>
		</div>
	);
}

export default Hero;
