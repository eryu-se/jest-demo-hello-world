const mathOperations = require ('../calculator');

let result = mathOperations.sum(2,2)

describe("Calc test, equality match", () => {
    describe("TC1", () => {
        test("Equality match, to be", () => {
            expect(result).toBe(4);
        })
    })
    describe("TC2", () => {
        test("Equality match, not to be", () => {
            expect(result).not.toBe(15);
        })
    })
})