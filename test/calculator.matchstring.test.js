const mathOperations = require('../calculator');

var string1 = "software testing help - a great resource for testers"

describe("Calculator test suite, match strings", () => {
    describe("Test case 1", () => {
        test("String match, success",() => {
            expect(string1).toMatch(/test/);
        })
    }) 
    describe("Test case 2", () => {
        test("String match, failure",() => {
            expect(string1).not.toMatch(/abc/)
        })
    })
})