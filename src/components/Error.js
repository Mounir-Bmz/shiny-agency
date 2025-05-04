import styled from 'styled-components';

const ErrorMessage = styled.h1`
    text-align: center;
    color: #ff0000;
    margin-top: 20px;
`;

function Error() {
    return <ErrorMessage>Error 404</ErrorMessage>;
}

export default Error;