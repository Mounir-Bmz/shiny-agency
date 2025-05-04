import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Shiny</h1>
            <nav>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/freelances">Freelances</Link>
                <span> | </span>
                <Link to="/survey/1">Survey</Link>
            </nav>
        </header>
    );
}

export default Header;