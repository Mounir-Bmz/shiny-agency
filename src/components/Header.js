import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../utils/hooks';

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => (theme === 'light' ? '#f4f4f4' : '#333')};
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
`;

const Nav = styled.nav`
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    margin: 0 10px;
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#66b0ff')};
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#fff')};
    }
`;

function Header({ title }) {
    const { theme } = useTheme();
    return (
        <HeaderContainer theme={theme}>
            <h1>{title}</h1>
            <Nav>
                <StyledLink theme={theme} to="/">Home</StyledLink>
                <span>|</span>
                <StyledLink theme={theme} to="/freelances">Freelances</StyledLink>
                <span>|</span>
                <StyledLink theme={theme} to="/survey/1">Survey</StyledLink>
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