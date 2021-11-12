const assert = require('assert');
const rooster = require('./index.js');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            // Define expected output
            const expected = 'cock-a-doodle-doo!';
            // Evaluating actual result
            const actual = rooster.announceDawn();
            // Assert Verification
            assert.strictEqual(actual, expected);
        });
    });
});