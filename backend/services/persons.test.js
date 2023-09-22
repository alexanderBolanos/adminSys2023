const { getPersons } = require('./persons');
const { describe, expect } = require('@jest/globals');

describe('Test #1: External API', () => {
    it('should recieve data', async () => {
        const response = await getPersons(5);
        expect(response.length).toBe(5);
    });
}, 10000);
