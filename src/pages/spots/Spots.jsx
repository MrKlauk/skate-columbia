import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Spot from "../../components/spot/Spot";
import "./Spots.css";

const API_URL = "https://skatecolumbia-backend-1.onrender.com/api/cards";

const Spots = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
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

    return (
        <>
            <Hero
                title="Skate Spots"
                subtitle="A curated list of the best spots in Columbia, SC."
            />
            <section className="page-cards">
                {loading ? (
                    <p className="loading">Loading spots...</p>
                ) : (
                    <div className="card-grid">
                        {spots.map((item) => (
                            <Spot key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Spots;