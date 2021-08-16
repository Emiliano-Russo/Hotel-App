import RoomCard from "../RoomCard/RoomCard";
import "./FeaturedRooms.css";
import { featuredRooms } from "../../FakeRepository/FakeRepository";

function FeaturedRooms() {
	return (
		<div>
			<h1>Featured Rooms</h1>
			<div className="FeaturedRooms">
				{featuredRooms.map((val) => {
					return <RoomCard key={val.key} roomId={val.key} price={val.price} type={val.type} linkImg={val.linkImg} guests={val.guests} />;
				})}
			</div>
		</div>
	);
}

export default FeaturedRooms;
