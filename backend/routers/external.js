const express = require('express');
const { getPersonsController } = require('../controllers/persons');
const router = express.Router();

router.get('/personas/:total', getPersonsController);

module.exports = router;
