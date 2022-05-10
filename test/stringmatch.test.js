const { stringMatch } = require ("../stringmatch");

let received = "Hello World";
let expected = "Hello World!";

describe("String match test", () => {
    describe("TC1", () => {
        test("'/World/' to match",() => {
            expect(stringMatch(received)).toMatch(/World/);
        })
    }) 
    describe("TC2", () => {
        test("'/abc/' not to match",() => {
            expect(stringMatch(received)).not.toMatch(/abc/)
        })
    })
    describe("TC3", () => {
        test("'Hello World!' to be", () => {
            expect(stringMatch(received)).toBe(expected);
        })
    })
})