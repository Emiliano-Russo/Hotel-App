import { rooms } from "../../../FakeRepository/FakeRepository";
import RoomCard from "../../RoomCard/RoomCard";
import { useContext, useEffect, useState } from "react";
import "./AllRooms.css";

//props: maxPrice, type, guests

function AllRooms(props) {
	const [AllRoomsArray, SetAllRoomsArray] = useState([]);

	useEffect(() => {
		SetAllRoomsArray(getAllRoomsMatchingFilters());
	}, [props.maxPrice, props.type, props.guests]);

	function getAllRoomsMatchingFilters() {
		return rooms.map((room) => {
			const priceMatch = +room.price <= +props.maxPrice;
			const typeMatch = room.type == props.type || props.type == "all";
			const guestsMatch = room.guests == props.guests || props.guests == "all";
			if (priceMatch && typeMatch && guestsMatch) {
				return <RoomCard key={room.key} roomId={room.key} linkImg={room.linkImg} guests={room.guests} type={room.type} price={room.price} />;
			} else {
				return null;
			}
		});
	}

	function isAllIsNull(array) {
		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			if (element != null) return false;
		}
		return true;
	}

	return <div className="AllRoomList">{!isAllIsNull(AllRoomsArray) ? AllRoomsArray : <h1>Unfortunately No Rooms Matched Your Search Parameters</h1>}</div>;
}

export default AllRooms;
