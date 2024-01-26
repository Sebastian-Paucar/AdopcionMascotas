// App.jsx
import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import FormList from './components/FormList';
import TestList from './components/TestList';
import AddQuestions from './components/AddQuestions';
const App = () => {
  const [questions, setQuestions] = useState([]);
 const [tests, setTests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await fetch('http://localhost:3001/questions');
        const questionsData = await questionsResponse.json();
        setQuestions(questionsData);
        const testsResponse = await fetch('http://localhost:3001/tests');
        const testsData = await testsResponse.json();
        setTests(testsData);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      }
    };
    fetchData();
  }, []);
  const handleQuestionSubmit = async (questionadd, answersadd) => {
    try {
      const response = await fetch('http://localhost:3001/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question:questionadd,
          answers:answersadd
        }),
      });

      if (response.ok) {
        const newQuestion = await response.json();
        setQuestions((prevQuestion) => [...prevQuestion, newQuestion]);

        // Mostrar una alerta con los datos del nuevo cuestionario
        alert(`¡Pregunta creada con éxito!\nID: ${newQuestion.id}\nPreguntas: ${newQuestion.question} \nRespuestas: ${newQuestion.answers}`);
      } else {
        throw new Error('Error al enviar la solicitud del cuestionario.');
      }
    } catch (error) {
      console.error('Error en la solicitud del cuestionario:', error.message);
      throw error;
    }
  };
  const handleTestSubmit = async (listQuestions) => {
    const questionsAsNumbers = listQuestions.map((questionId) => Number(questionId));
    try {
      
      const response = await fetch('http://localhost:3001/tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questions: questionsAsNumbers
        }),
      });

      if (response.ok) {
        const newTest = await response.json();
        setQuestions((prevTest) => [...prevTest, newTest]);
        // Mostrar una alerta con los datos del nuevo cuestionario
        alert(`¡Test creado con éxito!\nID: ${newTest.id}\nPreguntas: ${newTest.questions} `);
      } else {
        throw new Error('Error al enviar la solicitud del cuestionario.');
      }
    } catch (error) {
      console.error('Error en la solicitud del cuestionario:', error.message);
      throw error;
    }
  };
  return (

    <div className="App">
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      <div style={{ overflowY: 'auto', maxHeight: '40vw' }}>
        <h1>Lista de Preguntas</h1>
      <FormList questions={questions}/>
      </div>
      <div>
      <h1>Nuevo cuestionario</h1>
       <AddForm questions={questions} onTestSubmit={handleTestSubmit} />
       <div style={{ overflowY: 'auto', maxHeight: '25vw' }}>
       <h1>Pruebas Creadas</h1>
       <TestList tests={tests} questions={questions}/>
       </div>
      </div>
      <div>
        <AddQuestions questions={questions} onQuestionSubmit={handleQuestionSubmit}/>
      </div>
    </div>


     
    </div>
  );
};
export default App;