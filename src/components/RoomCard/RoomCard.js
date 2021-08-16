import "./RoomCard.css";
import { useHistory } from "react-router-dom";

function RoomCard(props) {
	const history = useHistory();

	function clickHandler(e) {
		e.preventDefault();
		console.log("roomId: " + props.roomId);
		history.push("/Rooms/" + props.roomId);
	}

	return (
		<div className="RoomCard" onClick={clickHandler}>
			<main style={{ backgroundImage: `url(${props.linkImg})` }}>
				<div className="price">
					<p>${props.price}</p>
					<p>per night</p>
				</div>
				<div className="guests">
					<p>Capacity: {props.guests}</p>
				</div>
			</main>
			<footer>{props.type}</footer>
		</div>
	);
}

export default RoomCard;
