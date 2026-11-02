import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { images } from "../../images";

const Carousel = ({ slides }) => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 4000);
        return () => clearInterval(id);
    }, [paused, slides.length]);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <h2 className="carousel-title">Featured Spots</h2>

            <div className="carousel-stage">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`carousel-slide ${i === index ? "active" : ""}`}
                        style={{ backgroundImage: `var(--overlay), url(${images[slide.img_name]})` }}
                    >
                        <div className="carousel-info">
                            <span className="carousel-tag">{slide.tag1}</span>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                            <Link to="/spots" className="carousel-btn">View All Spots</Link>
                        </div>
                    </div>
                ))}

                <button className="carousel-arrow carousel-prev" onClick={prev} aria-label="Previous">&#10094;</button>
                <button className="carousel-arrow carousel-next" onClick={next} aria-label="Next">&#10095;</button>
            </div>

            <div className="carousel-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel-dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Carousel;