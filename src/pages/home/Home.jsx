import { Link } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import { images } from "../../images";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Hero
                title="Your Complete Guide to Skateboarding in Columbia"
                variant="home"
            />
            <section className="home-cards">
                <Link
                    to="/spots"
                    className="home-card"
                    style={{ backgroundImage: `var(--overlay), url(${images["owens-field2.jpg"]})` }}
                >
                    <div className="home-card-content">
                        <h2>Spots</h2>
                        <p>See a curated list from local Columbia skaters</p>
                    </div>
                </Link>
                <Link
                    to="/shops"
                    className="home-card"
                    style={{ backgroundImage: `var(--overlay), url(${images["bluetile2.webp"]})` }}
                >
                    <div className="home-card-content">
                        <h2>Shops</h2>
                        <p>View specialty skate shops loved by locals</p>
                    </div>
                </Link>
                <Link
                    to="/tricks"
                    className="home-card"
                    style={{ backgroundImage: `var(--overlay), url(${images["overcrook1.avif"]})` }}
                >
                    <div className="home-card-content">
                        <h2>Tricks</h2>
                        <p>Learn tips on how to perform various tricks</p>
                    </div>
                </Link>
            </section>
        </>
    );
};

export default Home;