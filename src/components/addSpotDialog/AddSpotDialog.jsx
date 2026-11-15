import { useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../config";
import "./AddSpotDialog.css";

const IMAGE_OPTIONS = [
    "owens-field2.jpg",
    "irmo-skate-park.jpg",
    "russell.jpg",
    "close-hipp.jpg",
    "t-coop.jpg",
    "gambrell.jpg",
];

const TAG1_OPTIONS = ["Park", "Street"];

const AddSpotDialog = ({ onAdd, onClose }) => {
    const [inputs, setInputs] = useState({
        title: "",
        img_name: IMAGE_OPTIONS[0],
        tag1: TAG1_OPTIONS[0],
        tag2: "",
        description: "",
        rating: 3,
        location: "",
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((v) => ({ ...v, [name]: value }));
        setErrors((e) => ({ ...e, [name]: "" }));
    };

    const validate = () => {
        const e = {};
        if (inputs.title.trim().length < 3) e.title = "Title must be at least 3 characters";
        if (inputs.tag2.trim().length < 2) e.tag2 = "Tag 2 is required";
        if (inputs.description.trim().length < 10) e.description = "Description must be at least 10 characters";
        if (inputs.location.trim().length < 3) e.location = "Location is required";
        const r = parseInt(inputs.rating);
        if (isNaN(r) || r < 1 || r > 5) e.rating = "Rating must be between 1 and 5";
        return e;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length > 0) {
            setErrors(v);
            return;
        }
        setSending(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/cards`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs),
            });

            if (response.ok) {
                const newSpot = await response.json();
                onAdd(newSpot);
                toast.success("Spot added", { className: "toast-success" });
                onClose();
            } else {
                const msg = await response.text();
                toast.error(msg || "Error adding spot", { className: "toast-error" });
            }
        } catch (err) {
            toast.error("Couldn't connect to server", { className: "toast-error" });
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="dialogue-backdrop" onClick={(e) => {
            if (e.target.classList.contains("dialogue-backdrop")) onClose();
        }}>
            <div className="dialogue add-spot-dialogue">
                <span className="dialogue-close" onClick={onClose}>&times;</span>
                <div className="dialogue-body">
                    <h2 className="add-spot-title">Add a New Spot</h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label>Title</label>
                            <input name="title" value={inputs.title} onChange={handleChange} />
                            {errors.title && <span className="error">{errors.title}</span>}
                        </p>
                        <p>
                            <label>Image</label>
                            <select name="img_name" value={inputs.img_name} onChange={handleChange}>
                                {IMAGE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </p>
                        <p>
                            <label>Type</label>
                            <select name="tag1" value={inputs.tag1} onChange={handleChange}>
                                {TAG1_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </p>
                        <p>
                            <label>Difficulty</label>
                            <input name="tag2" value={inputs.tag2} onChange={handleChange} placeholder="e.g. Beginner, Advanced" />
                            {errors.tag2 && <span className="error">{errors.tag2}</span>}
                        </p>
                        <p>
                            <label>Description</label>
                            <textarea name="description" value={inputs.description} onChange={handleChange} />
                            {errors.description && <span className="error">{errors.description}</span>}
                        </p>
                        <p>
                            <label>Rating (1–5)</label>
                            <input name="rating" type="number" min="1" max="5" value={inputs.rating} onChange={handleChange} />
                            {errors.rating && <span className="error">{errors.rating}</span>}
                        </p>
                        <p>
                            <label>Location</label>
                            <input name="location" value={inputs.location} onChange={handleChange} />
                            {errors.location && <span className="error">{errors.location}</span>}
                        </p>
                        <p>
                            <button type="submit" disabled={sending}>
                                {sending ? "Adding..." : "Add Spot"}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpotDialog;