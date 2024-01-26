// AddForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddForm = ({ questions, onTestSubmit }) => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');

    const handleAddQuestion = () => {
        if (newQuestion) {
            setSelectedQuestions([...selectedQuestions, newQuestion]);
            setNewQuestion('');
        }

    };

    const handleTestSubmit = (e) => {
        e.preventDefault();
        if (selectedQuestions.length > 0) {
            onTestSubmit(selectedQuestions);
            setSelectedQuestions([]);
            setNewQuestion('');
        } else {
            console.error('Debe seleccionar al menos una pregunta.');
        }
    };

    return (
        <div>
        <form onSubmit={handleTestSubmit}>
          <select value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)}>
            <option value="">Selecciona una pregunta 🤔</option>
            {questions.map((question) => (
              <option key={question.id} value={question.id}>
                🤔 {question.question}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddQuestion}>
            Agregar pregunta
          </button>
          <div>
            Preguntas seleccionadas:
            {selectedQuestions.map((selectedQuestion, index) => (
              <div key={index}> 
                {questions.map((question) => {
                  if (question.id === index+1) {
                    return (
                      <p key={question.id}>
                        {` ${index + 1}. ${question.question}`}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
          <button type="submit">Guardar cuestionario</button>
        </form>
      </div>
    );
};

AddForm.propTypes = {
    questions: PropTypes.array.isRequired,
    onTestSubmit: PropTypes.func.isRequired,
};

export default AddForm;
