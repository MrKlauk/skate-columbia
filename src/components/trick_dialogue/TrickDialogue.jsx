import "./TrickDialogue.css";
import { images } from "../../images";

const TrickDialogue = ({ item, onClose }) => {
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
                        <h3>Prerequisites</h3>
                        <div className="dialogue-tags">
                            {item.prerequisites.map((p, i) => <span key={i} className="tag">{p}</span>)}
                        </div>
                    </div>
                    <div className="dialogue-section">
                        <h3>Common Mistakes</h3>
                        <ul className="mistakes-list">
                            {item.mistakes.map((m, i) => <li key={i}>{m}</li>)}
                        </ul>
                    </div>
                    <div className="dialogue-section">
                        <h3>How To Do It</h3>
                        <ol className="steps-list">
                            {item.steps.map((s, i) => <li key={i}>{s}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrickDialogue;