import { useEffect, useRef, useState } from "react";
import AllRooms from "./AllRooms/AllRooms";
import "./Rooms.css";

function Rooms() {
	const [roomType, setRoomType] = useState("all");

	function changeRoomHandler(e) {
		e.preventDefault();
		setRoomType(e.target.value);
	}

	const RoomTypeFilter = (
		<div>
			<p>Room Type</p>
			<select name="roomTypes" id="roomTypes" onChange={changeRoomHandler}>
				<option value="all">All</option>
				<option value="Junior Suite">Junior Suite</option>
				<option value="Deluxe">Deluxe</option>
				<option value="Standar">Standar</option>
			</select>
		</div>
	);

	const [guests, setGuests] = useState("all");

	function changeGuestsHandler(e) {
		e.preventDefault();
		setGuests(e.target.value);
	}

	const GuestsFilter = (
		<div>
			<p>Guests</p>
			<select name="guests" id="guests" onChange={changeGuestsHandler}>
				<option value="all">All</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</div>
	);

	const refSlider = useRef(null);
	const [priceValue, setPriceValue] = useState(20);

	useEffect(() => {
		const value = refSlider.current.value;
		setPriceValue(value);
	}, []);

	function changeLimitPriceHandler(e) {
		e.preventDefault();
		setPriceValue(e.target.value);
		console.log(e.target.value);
	}

	function onChangeHandler(e) {
		e.preventDefault();
		const value = refSlider.current.value;
		setPriceValue(value);
	}

	let PriceFilter = (
		<div>
			<p>Max Room Price ${priceValue}</p>
			<input ref={refSlider} type="range" min="20" max="500" defaultValue="500" onClick={changeLimitPriceHandler} onChange={onChangeHandler} />
		</div>
	);

	return (
		<div>
			<h1>Search Rooms</h1>
			<div className="Filters">
				{RoomTypeFilter}
				{GuestsFilter}
				{PriceFilter}
			</div>
			<div>
				<AllRooms type={roomType} maxPrice={priceValue} guests={guests} />
			</div>
		</div>
	);
}

export default Rooms;
