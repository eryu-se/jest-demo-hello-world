const mathOperations = require('../calculator');

describe("Calculator test suite, equality match", () => {
    describe("Test case 1", () => {
        test("Equality match, to be", () => {
            expect(2*2).toBe(4);
        })
    })
    describe("Test case 2", () => {
        test("Equality match, not to be", () => {
            expect(4-2).not.toBe(1);
        })
    })
})