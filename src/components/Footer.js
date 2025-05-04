import styled from 'styled-components';
import { useTheme } from '../utils/hooks';

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => (theme === 'light' ? '#f4f4f4' : '#333')};
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#fff')};
`;

function Footer() {
    const { theme, toggleTheme } = useTheme();

    return (
        <FooterContainer theme={theme}>
            <NightModeButton theme={theme} onClick={toggleTheme}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    );
}

export default Footer;