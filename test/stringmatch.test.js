const { stringMatch } = require ("../stringmatch");

let received = "Hello World";
let expected = "Hello World!";

describe("String test, match strings", () => {
    describe("Test case 1", () => {
        test("String match, success",() => {
            expect(stringMatch(received)).toMatch(/World/);
        })
    }) 
    describe("Test case 2", () => {
        test("String match, failure",() => {
            expect(stringMatch(received)).not.toMatch(/abc/)
        })
    })
    describe("Test case 3", () => {
        test("Given 'Hello World', return 'Hello World!'", () => {
            expect(stringMatch(received)).toBe(expected);
        })
    })
})