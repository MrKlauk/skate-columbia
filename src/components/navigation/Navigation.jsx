import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/spots">Spots</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shops">Shops</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tricks">Tricks</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;