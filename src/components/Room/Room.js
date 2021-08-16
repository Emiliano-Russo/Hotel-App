import { useParams } from "react-router-dom";
import { rooms } from "../../FakeRepository/FakeRepository";
import "./Room.css";

function Room(props) {
	let { roomKey } = useParams();
	const room = rooms.find((element) => element.key == roomKey);
	console.log("room :");
	console.log(room);

	if (room == undefined) return <h1>No room found</h1>;

	//Details, Info, Extras, picture
	return (
		<div className="Room">
			<img src={room.linkImg} alt="room"></img>
			<div className="Info">
				<div id="Details">
					<h3>Details</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
						of Lorem Ipsum.
					</p>
				</div>
				<div id="Info">
					<h3>Info</h3>
					<ul>
						<li>Price: ${room.price}</li>
						<li>Capacity: {room.guests}</li>
						<li>Pets Allowed</li>
						<li>Free Breakfast Included</li>
					</ul>
				</div>
				<div id="Extra">
					<h3>Extras</h3>
					<ul>
						<li>Lorem Ipsum is simply text </li>
						<li>Lorem Ipsum is simply text of the printing</li>
						<li>Lorem Ipsum has been the industry's</li>
						<li>Lorem Ipsum is simply </li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Room;
