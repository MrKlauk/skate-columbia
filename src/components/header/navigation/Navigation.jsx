import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item active"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Spots</a></li>
                <li className="nav-item"><a href="#">Shops</a></li>
                <li className="nav-item"><a href="#">Tricks</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;