import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Shop from "../../components/shop/Shop";
import ShopDialogue from "../../components/shop_dialogue/ShopDialogue";
import { API_BASE_URL } from "../../config";
import "./Shops.css";

const Shops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/cards`)
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
                            <Shop key={item._id} item={item} onClick={() => setSelected(item)} />
                        ))}
                    </div>
                )}
            </section>
            <ShopDialogue item={selected} onClose={() => setSelected(null)} />
        </>
    );
};

export default Shops;