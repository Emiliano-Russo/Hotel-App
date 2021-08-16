import "./Offers.css";
import Service from "./Service/Service";

const defaultDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!";

function Offers() {
	return (
		<div className="Offers">
			<h1>Services</h1>
			<div className="AllServices">
				<Service linkImg="https://img.icons8.com/color/48/000000/coctail-shot.png" title="Free Cocktails" description={defaultDescription} />
				<Service linkImg="https://img.icons8.com/color/48/000000/bus2.png" title="Free Shuttle" description={defaultDescription} />
				<Service linkImg="https://img.icons8.com/color/48/000000/beer.png" title="Strongest Beer" description={defaultDescription} />
			</div>
		</div>
	);
}

export default Offers;
