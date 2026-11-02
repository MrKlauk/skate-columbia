import { motion } from "motion/react";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import "./Hero.css";

const Hero = ({ title, subtitle, variant = "page", background }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    if (variant === "home" && background) {
        return (
            <section ref={ref} className="hero hero-home hero-zoom">
                <div className="hero-sticky">
                    <motion.div
                        className="hero-bg"
                        style={{ scale, filter: blur, backgroundImage: `var(--overlay), url(${background})` }}
                    />
                    <motion.div className="hero-content" style={{ opacity }}>
                        <h1>{title}</h1>
                        {subtitle && <p>{subtitle}</p>}
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className={`hero hero-${variant}`}>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </section>
    );
};

export default Hero;