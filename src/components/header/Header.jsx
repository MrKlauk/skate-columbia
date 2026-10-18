import "./Header.css";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;