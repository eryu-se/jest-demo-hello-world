const { stringMatch } = require ('../stringmatch');

describe("String test, truthiness", () => {
    describe("TC1", () => {
        test("to be null", () => {
            expect(stringMatch()).toBeNull()
        })
    })
    describe("TC2", () => {
        test("not to be null", () => {
            expect(stringMatch("blabla")).not.toBeNull()   
        })
    })
    describe("TC3", () => {
        test("joe is valid name", () => {
            // name has a valid value
            expect(stringMatch("joe")).toBeTruthy()
        })
    })
    describe("TC4", () => {
        test("null is false", () => {
            expect(stringMatch()).toBeTruthy()
        })
    })
    describe("TC5", () => {
        test("null is false or negative", () => {
            expect(stringMatch()).toBeFalsy()
        })
    })  
    describe("TC6", () => {
        test("'0' is false", () => {
            expect(stringMatch(0)).toBeFalsy()
        })
    })
})