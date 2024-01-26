// FormList.jsx
import PropTypes from 'prop-types';
function FormList({ questions }) {
  return (
    <ul>
      {questions.map((question) => {
        const questionnaire = questions.find((q) => q.id === question.id);
        return (
          <li key={question.id}>
            {questionnaire && <strong>{`✨${question.id}${question.question}`}</strong>}
            {questionnaire && (
              <ul>
                <strong>✔ Respuestas:</strong>
                {question.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

FormList.propTypes = {
  questions: PropTypes.array.isRequired,
};
export default FormList;