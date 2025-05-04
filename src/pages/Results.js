import { useContext } from 'react';
import styled from 'styled-components';
import { SurveyContext } from '../context';

const ResultsContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: #333;
`;

function Results() {
    const { answers } = useContext(SurveyContext);
    console.log('Résultats du questionnaire:', answers);

    return (
        <ResultsContainer>
            <Title>Résultats</Title>
            <p>Vérifiez les réponses dans la console (F12) !</p>
        </ResultsContainer>
    );
}

export default Results;