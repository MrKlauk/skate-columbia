import "./Hero.css";

const Hero = ({ title, subtitle, variant = "page" }) => {
    return (
        <section className={`hero hero-${variant}`}>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </section>
    );
};

export default Hero;