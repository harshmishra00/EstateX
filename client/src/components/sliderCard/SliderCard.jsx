import { Link } from "react-router-dom";
import "./sliderCard.scss";

function SliderCard({ item }) {
    return (
        <div className="sliderCard">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.images[0]} alt="" className="mainImg" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <div className="user">
                    <img src={item.user.avatar || "/noavatar.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SliderCard;
