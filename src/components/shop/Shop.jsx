import { motion, useMotionValue, animate } from "motion/react";
import "./Shop.css";
import { images } from "../../images";

const Shop = ({ item }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotate = useMotionValue(0);
    const scale = useMotionValue(1);

    const handleHoverStart = () => {
        animate(x, 0, { type: "spring", velocity: 200 });
        animate(y, 0, { type: "spring", velocity: -150 });
        animate(rotate, 0, { type: "spring", velocity: 300 });
        animate(scale, 1, { type: "spring", stiffness: 400, damping: 10 });
    };

    return (
        <motion.article
            className="shop"
            onHoverStart={handleHoverStart}
            style={{ x, y, rotate, scale }}
        >
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
        </motion.article>
    );
};

export default Shop;