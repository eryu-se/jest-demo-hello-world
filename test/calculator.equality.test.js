const mathOperations = require ('../calculator');

let result = mathOperations.sum(2,2)

describe("Calc test, equality match", () => {
    describe("TC1", () => {
        test("'2+2' to be '4'", () => {
            expect(result).toBe(4);
        })
    })
    describe("TC2", () => {
        test("'2+2' not to be 5", () => {
            expect(result).not.toBe(5);
        })
    })
})