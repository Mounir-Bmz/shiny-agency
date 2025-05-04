import { useContext } from 'react';
import styled from 'styled-components';
import { SurveyContext } from '../../context';
import { useFetch } from '../../utils/hooks';
import { useTheme } from '../../utils/hooks';
import { Loader } from '../../utils/Atoms';

const ResultsContainer = styled.div`
    padding: 20px;
    text-align: center;
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#2f2e41')};
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
    min-height: 100vh;
`;

const Title = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
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

// Fonction exportée pour les tests
export function formatQueryParams(answers) {
    return Object.keys(answers)
        .map((key) => `a${key}=${answers[key]}`)
        .join('&');
}

function Results() {
    const { answers } = useContext(SurveyContext);
    const { theme } = useTheme();

    const queryString = formatQueryParams(answers);
    const url = `http://localhost:8000/results?${queryString}`;

    const { data, isLoading, error } = useFetch(url);
    const results = data.results || {};

    console.log('Résultats du questionnaire:', answers);
    console.log('Résultats de l’API:', results);

    if (error) {
        return <ErrorMessage>Erreur lors du fetch des résultats</ErrorMessage>;
    }

    return (
        <ResultsContainer theme={theme}>
            <Title theme={theme}>Résultats</Title>
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