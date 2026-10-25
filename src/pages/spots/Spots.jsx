import Hero from "../../components/hero/Hero";
import Spot from "../../components/spot/Spot";
import items from "../../data.json";
import "./Spots.css";

const Spots = () => {
    const spots = items.filter((item) => item.category === "spot");

    return (
        <>
            <Hero
                title="Skate Spots"
                subtitle="A curated list of the best spots in Columbia, SC."
            />
            <section className="page-cards">
                <div className="card-grid">
                    {spots.map((item) => (
                        <Spot key={item._id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Spots;