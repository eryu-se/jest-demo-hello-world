const mathOperations = require('../calculator');

var name="Software testing help"
var n = null
    
describe("Calculator test suite, truthiness", () => {
    describe("Test case 1", () => {
        test("truthy operators, to be null", () => {
            expect(n).toBeNull()
        })
    })
    describe("Test case 2", () => {
        test("truthy operators, not to be null", () => {
            expect(name).not.toBeNull    
        })
    })
    describe("Test case 3", () => {
        test("truthy operators, to be truthy", () => {
            // name has a valid value
            expect(name).toBeTruthy()
        })
    })
    describe("Test case 4", () => {
        test("truthy operators, to be truthy", () => {
            //fail - as null is non success
            expect(n).toBeTruthy()
        })
    })
    describe("Test case 5", () => {
        test("truthy operators, to be falsy", () => {
            // pass - null treated as false or negative
            expect(n).toBeFalsy()
        })
    })  
    describe("Test case 6", () => {
        test("truthy operators, to be falsy", () => {
            // 0 - treated as false
            expect(0).toBeFalsy()
        })
    })
})