import Hero from "../../components/hero/Hero";
import Shop from "../../components/shop/Shop";
import items from "../../data.json";
import "./Shops.css";

const Shops = () => {
    const shops = items.filter((item) => item.category === "shop");

    return (
        <>
            <Hero
                title="Skate Shops"
                subtitle="Specialty skate shops loved by locals."
            />
            <section className="page-cards">
                <div className="card-grid">
                    {shops.map((item) => (
                        <Shop key={item._id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Shops;