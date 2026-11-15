import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Spot from "../../components/spot/Spot";
import SpotDialogue from "../../components/spot_dialogue/SpotDialogue";
import AddSpotDialog from "../../components/addSpotDialog/AddSpotDialog";
import { API_BASE_URL } from "../../config";
import "./Spots.css";

const Spots = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/cards`)
            .then((res) => res.json())
            .then((data) => {
                setSpots(data.filter((item) => item.category === "spot"));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const addSpot = (spot) => {
        setSpots((prev) => [...prev, spot]);
    };

    return (
        <>
            <Hero
                title="Skate Spots"
                subtitle="A curated list of the best spots in Columbia, SC."
            />
            <section className="page-cards">
                <button className="add-btn" onClick={() => setShowAdd(true)}>+</button>
                {loading ? (
                    <p className="loading">Loading spots...</p>
                ) : (
                    <div className="card-grid">
                        {spots.map((item) => (
                            <Spot key={item._id} item={item} onClick={() => setSelected(item)} />
                        ))}
                    </div>
                )}
            </section>
            <SpotDialogue item={selected} onClose={() => setSelected(null)} />
            {showAdd && (
                <AddSpotDialog onAdd={addSpot} onClose={() => setShowAdd(false)} />
            )}
        </>
    );
};

export default Spots;