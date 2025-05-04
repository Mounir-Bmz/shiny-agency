import { useParams } from 'react-router-dom';
import Question from '../components/Question';

function Survey() {
    const { questionNumber } = useParams();
    const questionNum = parseInt(questionNumber);
    return (
        <div>
            <h1>Questionnaire</h1>
            <Question questionNumber={questionNum} />
        </div>
    );
}

export default Survey;