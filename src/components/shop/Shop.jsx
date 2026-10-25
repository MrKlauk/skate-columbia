import "./Shop.css";
import { images } from "../../images";

const Shop = ({ item }) => {
    return (
        <article className="shop">
            <img className="shop-img" src={images[item.img_name]} alt={item.title} />
            <div className="shop-body">
                <div className="shop-head">
                    <h3>{item.title}</h3>
                    <span className="tag">{item.tag1}</span>
                </div>
                <span className="tag">{item.tag2}</span>
                <p className="shop-desc">{item.description}</p>
                <span className="shop-footer">{"\u{1F550}"} {item.hours}</span>
            </div>
        </article>
    );
};

export default Shop;