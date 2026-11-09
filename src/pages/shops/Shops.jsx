import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Shop from "../../components/shop/Shop";
import "./Shops.css";

const API_URL = "https://skatecolumbia-backend-1.onrender.com/api/cards";

const Shops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setShops(data.filter((item) => item.category === "shop"));
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
                title="Skate Shops"
                subtitle="Specialty skate shops loved by locals."
            />
            <section className="page-cards">
                {loading ? (
                    <p className="loading">Loading shops...</p>
                ) : (
                    <div className="card-grid">
                        {shops.map((item) => (
                            <Shop key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Shops;