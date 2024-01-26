// backend/routes/preguntas.js
const express = require('express');
const router = express.Router();
const db = require('../../database/questions');

// Obtener la lista de preguntas
router.get('/', (req, res) => {
    res.json(db);
});

module.exports = router;