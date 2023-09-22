const { getPersons } = require('../services/persons');

const getPersonsController = async (req, res) => {
    const { total } = req.params;
    const response = await getPersons(total);
    res.status(200).json(response);
};

module.exports = {
    getPersonsController,
};
