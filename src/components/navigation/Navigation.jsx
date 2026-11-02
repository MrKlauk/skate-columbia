import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="main-nav">
            <button
                className="nav-toggle"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? "\u25B2" : "\u25BC"}
            </button>
            <ul className={`nav-list ${open ? "open" : ""}`}>
                <li className="nav-item">
                    <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/spots" onClick={() => setOpen(false)}>Spots</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shops" onClick={() => setOpen(false)}>Shops</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tricks" onClick={() => setOpen(false)}>Tricks</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;