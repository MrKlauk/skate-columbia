import "./ShopDialogue.css";
import { images } from "../../images";

const ShopDialogue = ({ item, onClose }) => {
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
                    <p className="dialogue-desc">{item.description}</p>
                    <div className="dialogue-section">
                        <h3>Info</h3>
                        <p><strong>Address:</strong> {item.address}</p>
                        <p><strong>Hours:</strong> {item.hours}</p>
                    </div>
                    <div className="dialogue-section">
                        <h3>Brands Carried</h3>
                        <div className="dialogue-tags">
                            {item.brands.map((b, i) => <span key={i} className="tag">{b}</span>)}
                        </div>
                    </div>
                    <div className="dialogue-section">
                        <h3>Services</h3>
                        <div className="dialogue-tags">
                            {item.services.map((s, i) => <span key={i} className="tag">{s}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDialogue;