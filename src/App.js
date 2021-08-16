import "./App.css";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";
import FeaturedRooms from "./components/FeaturedRooms/FeaturedRooms";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Room from "./components/Room/Room";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/Rooms/:roomKey">
						<Room />
					</Route>
					<Route path="/Rooms">
						<Rooms />
					</Route>
					<Route path="/">
						<Hero />
						<Offers />
						<FeaturedRooms />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
