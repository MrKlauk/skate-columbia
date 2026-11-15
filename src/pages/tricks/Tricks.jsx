import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Trick from "../../components/trick/Trick";
import TrickDialogue from "../../components/trick_dialogue/TrickDialogue";
import { API_BASE_URL } from "../../config";
import "./Tricks.css";

const Tricks = () => {
    const [tricks, setTricks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/cards`)
            .then((res) => res.json())
            .then((data) => {
                setTricks(data.filter((item) => item.category === "trick"));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Hero
                title="Tricks"
                subtitle="Learn how to perform various skateboarding tricks."
            />
            <section className="page-cards">
                {loading ? (
                    <p className="loading">Loading tricks...</p>
                ) : (
                    <div className="card-grid">
                        {tricks.map((item) => (
                            <Trick key={item._id} item={item} onClick={() => setSelected(item)} />
                        ))}
                    </div>
                )}
            </section>
            <TrickDialogue item={selected} onClose={() => setSelected(null)} />
        </>
    );
};

export default Tricks;