const { string } = require ('../string');

describe("String test, truthiness", () => {
    test("string to be null", () => {
        expect(string()).toBeNull()
    })
    test("string not to be null", () => {
        expect(string("")).not.toBeNull()   
    })
    test("string to be defined", () => {    
        var name = "joe"
        // name is defined
        expect(name).toBeDefined()
    })
    test("string to be undefined", () => {
        var name = 
        // name is undefined
        expect(name).toBeUndefined()
    })
    test("null to be false", () => {
        expect(string()).toBeFalsy()
    })
    test("zero to be false", () => {
        expect(string(0)).toBeFalsy()
    })
})