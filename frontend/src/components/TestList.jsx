import PropTypes from 'prop-types';

function TestList({ tests, questions }) {
  return (
    <ul>
      {tests.map((test) => (
        <div key={test.id}>
          <p>
            <strong>{`✨Test ID: ${test.id}`}</strong>
          </p>
          <ul>
            {test.questions.map((questionId, index) => {
              const question = questions.find((q) => q.id === questionId);
              return (
                question && (
                  <li key={question.id}>
                    <p>{`${index+1}. ${question.question}`}</p>
                    <p>Opciones:</p>
                    <ul>
                      {question.answers.map((answer, index) => (
                        <li key={index}>{answer}</li>
                      ))}
                    </ul>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      ))}
    </ul>
  );
}

TestList.propTypes = {
  tests: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};

export default TestList;
