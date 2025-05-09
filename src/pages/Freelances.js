import styled from 'styled-components';
import { Loader } from '../utils/Atoms';
import { useFetch } from '../utils/hooks';
import { useTheme } from '../utils/hooks';
import Card from '../components/Card';

const FreelancesTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
    margin-top: 20px;
`;

const FreelanceList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
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

const FreelancesContainer = styled.div`
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#2f2e41')};
    min-height: 100vh;
    padding: 20px;
`;

function Freelances() {
    const { data, isLoading, error } = useFetch('http://localhost:8000/freelances');
    const freelances = data.freelancersList || [];
    const { theme } = useTheme();

    if (error) {
        return <ErrorMessage>Erreur lors du fetch des freelances</ErrorMessage>;
    }

    return (
        <FreelancesContainer theme={theme}>
            <FreelancesTitle theme={theme}>Freelances</FreelancesTitle>
            {isLoading ? (
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            ) : freelances.length > 0 ? (
                <FreelanceList>
                    {freelances.map((freelance, index) => (
                        <Card
                            key={`${freelance.name}-${index}`}
                            title={freelance.name}
                            picture={freelance.picture}
                        />
                    ))}
                </FreelanceList>
            ) : (
                <ErrorMessage>Aucun freelance trouvé.</ErrorMessage>
            )}
        </FreelancesContainer>
    );
}

export default Freelances;