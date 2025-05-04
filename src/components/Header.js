import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
`;

const Nav = styled.nav`
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    margin: 0 10px;
    color: #333;
    text-decoration: none;
    &:hover {
        color: #007bff;
    }
`;

function Header({ title }) {
    return (
        <HeaderContainer>
            <h1>{title}</h1>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <span>|</span>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <span>|</span>
                <StyledLink to="/survey/1">Survey</StyledLink>
            </Nav>
        </HeaderContainer>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: 'Shiny',
};

export default Header;