// AddQuestions.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddQuestions = ({ onQuestionSubmit }) => {
  const [questionadd, setQuestion] = useState('');
  const [answersadd, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del campo de pregunta y respuestas
    if (!questionadd.trim() || (answersadd.length === 0 && !currentAnswer.trim())) {
      setErrorMessage('Debe completar todos los campos.');
      return;
    }

    // Almacenar la respuesta actual antes de enviar el formulario
    if (currentAnswer.trim()) {
      setAnswers(prevAnswers => [...prevAnswers, currentAnswer.trim()]);
      setCurrentAnswer('');
    }

    // Envío del formulario
    onQuestionSubmit(questionadd, answersadd.concat(currentAnswer.trim()));
    setAnswers([]);
    setQuestion('');
    setCurrentAnswer('');
    setErrorMessage('');
  };

  const handleAddAnswer = () => {
    // Almacenar la respuesta actual al agregar
    if (currentAnswer.trim()) {
      setAnswers(prevAnswers => [...prevAnswers, currentAnswer.trim()]);
      setCurrentAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question"><h3>Pregunta:</h3></label>
        <input
          type="text"
          id="question"
          value={questionadd}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="answers"><h3>Respuestas:</h3></label>
        {answersadd.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
        <input
          type="text"
          id="answers"
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          required
        />
        <button type="button" onClick={handleAddAnswer}>
          Agregar respuesta
        </button>
      </div>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <button type="submit">Agregar pregunta</button>
    </form>
  );
};

AddQuestions.propTypes = {
  onQuestionSubmit: PropTypes.func.isRequired,
};

export default AddQuestions;
