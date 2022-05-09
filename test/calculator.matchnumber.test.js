const mathOperations = require ('../calculator');

describe("Calc test, match numbers", () => {
    describe("TC1", () => {
        test("greater than", () => {
            let result = mathOperations.sum(1,2)
            expect(result).toBeGreaterThan(2)
        })
    })
    describe("TC2", () => {
        test("less than or equal", () => {
            let result = mathOperations.diff(10,2)
            expect(result).toBeLessThanOrEqual(8)
        })
    })
    describe("TC3", () => {
        test("greater than or equal", () => {
            let result = mathOperations.product(2,8)
            expect(result).toBeGreaterThanOrEqual(16)
        })
    })
})