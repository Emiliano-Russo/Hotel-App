import "./Service.css";

function Service(props) {
	return (
		<div className="Service">
			<img src={props.linkImg} alt="Icon" />
			<h4>{props.title}</h4>
			<p>{props.description}</p>
		</div>
	);
}

export default Service;
