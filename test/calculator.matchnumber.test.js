const mathOperations = require ('../calculator');

describe("Calc test, match numbers", () => {
    describe("TC1", () => {
        test("'1+2' greater than '2'", () => {
            let result = mathOperations.sum(1,2)
            expect(result).toBeGreaterThan(2)
        })
    })
    describe("TC2", () => {
        test("'10-2' less than '10'", () => {
            let result = mathOperations.diff(10,2)
            expect(result).toBeLessThan(10)
        })
    })
    describe("TC3", () => {
        test("2*8' greater than or equal '16'", () => {
            let result = mathOperations.product(2,8)
            expect(result).toBeGreaterThanOrEqual(16)
        })
    })
})