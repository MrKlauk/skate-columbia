import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Trick from "../../components/trick/Trick";
import "./Tricks.css";

const API_URL = "https://skatecolumbia-backend-1.onrender.com/api/cards";

const Tricks = () => {
    const [tricks, setTricks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
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
                            <Trick key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Tricks;