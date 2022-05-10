const { string } = require ('../string');

describe("String test, truthiness", () => {
    describe("TC1", () => {
        test("string to be null", () => {
            expect(string()).toBeNull()
        })
    })
    describe("TC2", () => {
        test("string not to be null", () => {
            expect(string("blabla")).not.toBeNull()   
        })
    })
    describe("TC3", () => {
        test("string to be defined", () => {
            // name has a valid value
            expect(string("joe")).toBeDefined()
        })
    })
    describe("TC4", () => {
        let name =
        test("string to be undefined", () => {
            expect(name).toBeUndefined()
        })
    })
    describe("TC5", () => {
        test("null to be falsy", () => {
            expect(string()).toBeFalsy()
        })
    })  
    describe("TC6", () => {
        test("zero to be falsy", () => {
            expect(string(0)).toBeFalsy()
        })
    })
})