const logger = require('../config/logger');

const loggerMw = (req, res, next) => {
    logger.log({
        level: 'info',
        message: JSON.stringify({
            when: Date.now(),
            url: req.url,
            params: req.params,
            body: req.body,
            method: req.method,
        }),
    });

    next();
};

module.exports = loggerMw;
