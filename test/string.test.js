const { string } = require ("../string");

var received = "Hello World";
var expected = "Hello World!";

describe("String test", () => {
    test("received string to match 'World'",() => {
        expect(string(received)).toMatch(/World/)
    })
    test("received string not to match 'abc'",() => {
        expect(string(received)).not.toMatch(/abc/)
    })
    test("received string to be 'Hello World!'", () => {
        expect(string(received)).toBe(expected)
    })
})