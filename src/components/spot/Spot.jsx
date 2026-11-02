import { motion, useMotionValue, animate } from "motion/react";
import "./Spot.css";
import { images } from "../../images";

const Spot = ({ item }) => {
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
            className="spot"
            onHoverStart={handleHoverStart}
            style={{ x, y, rotate, scale }}
        >
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
        </motion.article>
    );
};

export default Spot;