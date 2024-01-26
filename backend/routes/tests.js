// backend/routes/tests.js
const express = require('express');
const router = express.Router();
const db = require('../../database/tests');

// Obtener la lista de questionarios
router.get('/', (req, res) => {
    res.json(db);
});

module.exports = router;