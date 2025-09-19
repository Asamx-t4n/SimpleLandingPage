import "./Card.css";
import { FaLocationDot } from "react-icons/fa6";
const Card = ({ src, Location, Description, Price, FixPrice }) => {
	return (
		<div className="Card">
			<img className="Card-Img" src={src} alt="Card-Img" />
			<h3 className="Card-Location">
				<FaLocationDot />
				{Location}
			</h3>
			<p className="Card-Description">{Description}</p>
			<p className="Card-Price">{Price}</p>
			<p className="Card-FixPrice">Price:{FixPrice}</p>
		</div>
	);
};
export default Card;
