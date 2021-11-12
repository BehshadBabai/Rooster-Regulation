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
    describe('.timeAtDawn', () => {
        it('returns its argument as a string for valid argument', () => {
            // Define expected output
            const expected = '9';
            // Evaluating actual result
            const actual = rooster.timeAtDawn(9);
            // Assert Verification
            assert.strictEqual(actual, expected);
        });
        it('throws an error if passed a negative number', () => {
            assert.throws(() => {
                rooster.timeAtDawn(-1);
            }, RangeError);
        });

        it('throws an error if passed a number more than 23', () => {
            assert.throws(() => {
                rooster.timeAtDawn(25);
            }, RangeError);
        });
    });
});