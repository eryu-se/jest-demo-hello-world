const mathOperations = require('../calculator');

var num1 = 100;
var num2 = -20;
var num3 = 0;

describe("Calculator test suite, match numbers", () => {
    describe("Test case 1", () => {
        test("Greater than", () => {
            expect(num1).toBeGreaterThan(10)
        })
    })
    describe("Test case 2", () => {
        test("Less than or equal", () => {
            expect(num2).toBeLessThanOrEqual(0)
        })
    })
    describe("Test case 3", () => {
        test("Greater than or equal", () => {
            expect(num3).toBeGreaterThanOrEqual(0)
        })
    })
})