import "./SpotDialogue.css";
import { images } from "../../images";

const SpotDialogue = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="dialogue-backdrop" onClick={(e) => {
            if (e.target.classList.contains("dialogue-backdrop")) onClose();
        }}>
            <div className="dialogue">
                <span className="dialogue-close" onClick={onClose}>&times;</span>
                <div
                    className="dialogue-hero"
                    style={{ backgroundImage: `url(${images[item.img_name]})` }}
                >
                    <div className="dialogue-hero-tags">
                        <span className="tag">{item.tag1}</span>
                        <span className="tag">{item.tag2}</span>
                    </div>
                    <h2 className="dialogue-title">{item.title}</h2>
                </div>
                <div className="dialogue-body">
                    <div className="dialogue-rating">
                        <span className="stars">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <span key={i} className={i < item.rating ? "star" : "star star-off"}>
                                    {"\u2605"}
                                </span>
                            ))}
                        </span>
                        <span>{item.rating} / 5 local rating</span>
                    </div>
                    <p className="dialogue-desc">{item.description}</p>
                    {item.tips && item.tips.length > 0 && (
                        <div className="dialogue-section">
                            <h3>Local Tips</h3>
                            <ul>
                                {item.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                            </ul>
                        </div>
                    )}
                    <div className="dialogue-section">
                        <h3>Location</h3>
                        <p>{item.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDialogue;