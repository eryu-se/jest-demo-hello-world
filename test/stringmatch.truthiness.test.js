const { stringMatch } = require ('../stringmatch');

describe("String match test, truthiness", () => {
    describe("TC1", () => {
        test("'null' to be null", () => {
            expect(stringMatch()).toBeNull()
        })
    })
    describe("TC2", () => {
        test("'blabla' not to be null", () => {
            expect(stringMatch("blabla")).not.toBeNull()   
        })
    })
    describe("TC3", () => {
        test("'joe' to be truthy", () => {
            // name has a valid value
            expect(stringMatch("joe")).toBeTruthy()
        })
    })
    describe("TC4", () => {
        test("failed test, to be truthy but null is falsy", () => {
            expect(stringMatch()).toBeTruthy()
        })
    })
    describe("TC5", () => {
        test("'null' to be falsy", () => {
            expect(stringMatch()).toBeFalsy()
        })
    })  
    describe("TC6", () => {
        test("'0' to be falsy", () => {
            expect(stringMatch(0)).toBeFalsy()
        })
    })
})