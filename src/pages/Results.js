import { useContext } from 'react';
import styled from 'styled-components';
import { SurveyContext } from '../context';
import { useFetch } from '../utils/hooks';
import { Loader } from '../utils/Atoms';

const ResultsContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: #333;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: #ff0000;
    margin-top: 20px;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 80vh;
`;

function Results() {
    const { answers } = useContext(SurveyContext);

    // Construire l'URL avec les réponses
    const queryString = Object.keys(answers)
        .map((key) => `a${key}=${answers[key]}`)
        .join('&');
    const url = `http://localhost:8000/results?${queryString}`;

    const { data, isLoading, error } = useFetch(url);
    const results = data.results || {};

    console.log('Résultats du questionnaire:', answers);
    console.log('Résultats de l’API:', results);

    if (error) {
        return <ErrorMessage>Erreur lors du fetch des résultats</ErrorMessage>;
    }

    return (
        <ResultsContainer>
            <Title>Résultats</Title>
            {isLoading ? (
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            ) : (
                <p>Vérifiez les résultats dans la console (F12) !</p>
            )}
        </ResultsContainer>
    );
}

export default Results;