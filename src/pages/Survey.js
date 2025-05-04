import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../components/Question';

const SurveyContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: #333;
`;

function Survey() {
    const { questionNumber } = useParams();
    const questionNum = parseInt(questionNumber);
    return (
        <SurveyContainer>
            <Title>Questionnaire</Title>
            <Question questionNumber={questionNum} />
        </SurveyContainer>
    );
}

export default Survey;