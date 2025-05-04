import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    width: 200px;
    cursor: pointer;
`;

const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
`;

const CardTitle = styled.h3`
    margin: 10px 0;
`;

function Card({ title, picture }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <CardContainer onClick={toggleFavorite} data-testid="card">
            <CardImage src={picture} alt={title} data-testid="card-image" />
            <CardTitle data-testid="card-title">
                {isFavorite ? `⭐️ ${title} ⭐️` : title}
            </CardTitle>
        </CardContainer>
    );
}

export default Card;