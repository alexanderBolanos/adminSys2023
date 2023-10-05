function getPersons(total) {
    return new Promise((resolve, reject) => {
        fetch(
            `https://random-data-api.com/api/v2/users?size=${total}&response_type=json`
        )
            .then((response) => response.json())
            .then((data) => resolve(data));
    });
}

module.exports = {
    getPersons,
};
