import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #f4f4f4;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

function Footer() {
    return (
        <FooterContainer>
            <p>Footer</p>
        </FooterContainer>
    );
}

export default Footer;