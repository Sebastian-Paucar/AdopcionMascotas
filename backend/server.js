const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware para manejar CORS
app.use(cors());
app.use(express.json());

// Rutas
const databasePath = path.resolve(__dirname, '../database');

// Inicializar archivos de datos si no existen
const initializeDataFile = (fileName) => {
    const filePath = path.join(databasePath, `${fileName}.js`);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `module.exports = [];`);
    }
};
initializeDataFile('questions');
initializeDataFile('tests');

// Cargar datos al inicio del servidor
let questionsData = require('../database/questions');
let testsData = require('../database/tests');

app.post('/questions', (req, res) => {
    try {
        const { question, answers } = req.body;
        if (!question || !answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'La pregunta y las respuestas son requeridas' });
        }
        const newQuestion = {
            id: questionsData.length + 1,
            question,
            answers,
        };
        questionsData.push(newQuestion);
        fs.writeFileSync(path.join(databasePath, 'questions.js'), `module.exports = ${JSON.stringify(questionsData, null, 2)};`);

        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Error en POST /questions:', error.message);
        res.status(500).json({ error: error.message });
    }
});
app.get('/questions', (req, res) => {
    try {
        res.json(questionsData);
    } catch (error) {
        console.error('Error en GET /questions:', error.message);
        res.status(500).json({ error: error.message });
    }
});
app.get('/tests', (req, res) => {
    try {
        res.json(testsData);
    } catch (error) {
        console.error('Error en GET /tests:', error.message);
        res.status(500).json({ error: error.message });
    }
});
app.post('/tests', (req, res) => {
    try {
        const { questions } = req.body;
        if (!questions || !Array.isArray(questions)) {
            return res.status(400).json({ error: 'Se requieren preguntas válidas para crear un nuevo cuestionario' });
        }

        const newTest = {
            id: testsData.length + 1,
            questions,
        };

        testsData.push(newTest);

        fs.writeFileSync(path.join(databasePath, 'tests.js'), `module.exports = ${JSON.stringify(testsData, null, 2)};`);

        res.status(201).json(newTest);
    } catch (error) {
        console.error('Error en POST /tests:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
