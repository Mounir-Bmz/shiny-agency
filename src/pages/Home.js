import styled from 'styled-components';
import { useTheme } from '../utils/hooks';

const HomeTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
    margin-top: 0px;
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#2f2e41')};
    padding: 20px;
    min-height: 100vh;
`;

function Home() {
    const { theme } = useTheme();
    return <HomeTitle theme={theme}>Shiny</HomeTitle>;
}

export default Home;