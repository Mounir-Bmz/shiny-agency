import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../utils/Atoms';
import { SurveyContext } from '../context';

const SurveyContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: #333;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 80vh;
`;

const LinkWrapper = styled.div`
    margin-top: 20px;
    a {
        margin: 0 10px;
        color: #007bff;
        text-decoration: none;
    }
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    background-color: ${({ isSelected, answer }) =>
        isSelected ? (answer ? '#28a745' : '#dc3545') : '#007bff'};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${({ isSelected, answer }) =>
            isSelected ? (answer ? '#218838' : '#c82333') : '#0056b3'};
    }
`;

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setDataLoading] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { saveAnswers } = useContext(SurveyContext);

    // Fetch des questions
    useEffect(() => {
        setDataLoading(true);
        fetch(`http://localhost:8000/survey`)
            .then((response) => response.json())
            .then(({ surveyData }) => {
                setSurveyData(surveyData);
                setDataLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    // Réinitialise selectedAnswer quand questionNumber change
    useEffect(() => {
        setSelectedAnswer(null); // Remet à null à chaque changement de question
    }, [questionNumber]);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        saveAnswers({ [questionNumber]: answer });
    };

    return (
        <SurveyContainer>
            <Title>Questionnaire</Title>
            {isDataLoading ? (
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            ) : (
                <>
                    <h2>Question {questionNumber}</h2>
                    <p>{surveyData[questionNumber]}</p>
                    <div>
                        <Button
                            isSelected={selectedAnswer === true}
                            answer={true}
                            onClick={() => handleAnswer(true)}
                        >
                            Oui
                        </Button>
                        <Button
                            isSelected={selectedAnswer === false}
                            answer={false}
                            onClick={() => handleAnswer(false)}
                        >
                            Non
                        </Button>
                    </div>
                </>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[nextQuestionNumber] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    );
}

export default Survey;