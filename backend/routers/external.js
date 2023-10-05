const express = require('express');
const { getPersonsController } = require('../controllers/persons');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log(
        '# request: ',
        JSON.stringify({
            when: Date.now(),
            url: req.url,
            params: req.params,
            body: req.body,
            method: req.method,
        })
    );
    next();
});

router.get('/personas/:total', getPersonsController);

module.exports = router;
