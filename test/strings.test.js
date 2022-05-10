const { string } = require ("../string");

let received = "Hello World";
let expected = "Hello World!";

describe("String test", () => {
    describe("TC1", () => {
        test("received string to match 'World'",() => {
            expect(string(received)).toMatch(/World/);
        })
    }) 
    describe("TC2", () => {
        test("received string not to match 'abc'",() => {
            expect(string(received)).not.toMatch(/abc/)
        })
    })
    describe("TC3", () => {
        test("received string to be 'Hello World!'", () => {
            expect(string(received)).toBe(expected);
        })
    })
})