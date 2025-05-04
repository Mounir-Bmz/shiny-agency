import PropTypes from 'prop-types';

function Question({ questionNumber }) {
    return <h2>Question {questionNumber}</h2>;
}

Question.propTypes = {
    questionNumber: PropTypes.number.isRequired,
};

export default Question;