import "./Trick.css";
import { images } from "../../images";

const Trick = ({ item }) => {
    return (
        <article className="trick">
            <img className="trick-img" src={images[item.img_name]} alt={item.title} />
            <div className="trick-body">
                <div className="trick-head">
                    <h3>{item.title}</h3>
                    <span className="tag">{item.tag1}</span>
                </div>
                <span className="tag">{item.tag2}</span>
                <p className="trick-desc">{item.description}</p>
            </div>
        </article>
    );
};

export default Trick;