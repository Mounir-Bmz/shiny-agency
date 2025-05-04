import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader } from '../utils/Atoms';

const FreelancesTitle = styled.h1`
    text-align: center;
    color: #333;
    margin-top: 20px;
`;

const FreelanceList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
`;

const FreelanceCard = styled.div`
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    width: 200px;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: #ff0000;
    margin-top: 20px;
`;

function Freelances() {
    const [freelances, setFreelances] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:8000/freelances')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du fetch des freelances');
                }
                return response.json();
            })
            .then((data) => {
                console.log('API Response:', data);
                const freelancesData = data.freelancersList || [];
                setFreelances(freelancesData);
                setDataLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setDataLoading(false);
            });
    }, []);

    return (
        <div>
            <FreelancesTitle>Freelances</FreelancesTitle>
            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : isDataLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>
            ) : freelances && freelances.length > 0 ? (
                <FreelanceList>
                    {freelances.map((freelance, index) => (
                        <FreelanceCard key={`${freelance.name}-${index}`}>
                            <h3>{freelance.name}</h3>
                            <p>{freelance.job}</p>
                        </FreelanceCard>
                    ))}
                </FreelanceList>
            ) : (
                <ErrorMessage>Aucun freelance trouvé.</ErrorMessage>
            )}
        </div>
    );
}

export default Freelances;