import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">Home</Link>
			<Link to="/Rooms">Rooms</Link>
		</header>
	);
}

export default Header;
