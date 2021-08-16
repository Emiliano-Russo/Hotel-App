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
		<div className="RoomCard" onClick={clickHandler} style={{ backgroundImage: `url(${props.linkImg})` }}>
			<div className="info">
				<p>${props.price} per night</p>
				<p>Capacity: {props.guests}</p>
				<p>Type: {props.type}</p>
			</div>
		</div>
	);
}

export default RoomCard;
