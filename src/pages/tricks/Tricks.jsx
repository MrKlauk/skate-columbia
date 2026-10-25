import Hero from "../../components/hero/Hero";
import Trick from "../../components/trick/Trick";
import items from "../../data.json";
import "./Tricks.css";

const Tricks = () => {
    const tricks = items.filter((item) => item.category === "trick");

    return (
        <>
            <Hero
                title="Tricks"
                subtitle="Learn how to perform various skateboarding tricks."
            />
            <section className="page-cards">
                <div className="card-grid">
                    {tricks.map((item) => (
                        <Trick key={item._id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Tricks;