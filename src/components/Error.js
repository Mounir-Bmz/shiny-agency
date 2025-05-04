import styled from 'styled-components';
import { useTheme } from '../utils/hooks';

const ErrorMessage = styled.h1`
    text-align: center;
    color: #ff0000;
    margin-top: 20px;
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#2f2e41')};
    min-height: 100vh;
    padding: 20px;
`;

function Error() {
    const { theme } = useTheme();
    return <ErrorMessage theme={theme}>Error 404</ErrorMessage>;
}

export default Error;