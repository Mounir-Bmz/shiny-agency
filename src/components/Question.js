import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuestionText = styled.h2`
    color: #007bff;
    font-size: 1.5rem;
    margin-top: 10px;
`;

function Question({ questionNumber }) {
    return <QuestionText>Question {questionNumber}</QuestionText>;
}

Question.propTypes = {
    questionNumber: PropTypes.number.isRequired,
};

export default Question;