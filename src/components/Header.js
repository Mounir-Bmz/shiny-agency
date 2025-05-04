import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
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

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: 'Shiny',
};

export default Header;