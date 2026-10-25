import "./Spot.css";
import { images } from "../../images";

const Spot = ({ item }) => {
    return (
        <article className="spot">
            <img className="spot-img" src={images[item.img_name]} alt={item.title} />
            <div className="spot-body">
                <div className="spot-head">
                    <h3>{item.title}</h3>
                    <span className="tag">{item.tag1}</span>
                </div>
                <span className="tag">{item.tag2}</span>
                <p className="spot-desc">{item.description}</p>
                <span className="spot-footer">{"\u{1F4CD}"} {item.location}</span>
            </div>
        </article>
    );
};

export default Spot;