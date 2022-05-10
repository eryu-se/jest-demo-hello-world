const mathOperations = require ('../math');

describe("Math operations test", () => {
    describe("TC1", () => {
        let result = mathOperations.sum(1,2) 
        test("1 + 2 not to be 4", () => {
            expect(result).not.toBe(4);
        })
    })
    describe("TC2", () => {
        let result = mathOperations.diff(10,2) 
        test("10 - 2 to be 8", () => {
            expect(result).toBe(8);
        })
    })
    describe("TC3", () => { 
        let result = mathOperations.product(2,8)
        test("2 * 8 to equal 16", () => {
            expect(result).toEqual(16);
        })
    })
    describe("TC4", () => {
        let result = mathOperations.sum(1,2)
        test("1 + 2 to be < 4, ≤ 3, > 2.5", () => {
            expect(result).toBeLessThan(4)
            expect(result).toBeLessThanOrEqual(3)
            expect(result).toBeGreaterThan(2.5)
        })
    })
    describe("TC5", () => {
        let result = mathOperations.diff(10,2)
        test("10 - 2 to be < 10, > 7", () => {
            expect(result).toBeLessThan(10)
            expect(result).toBeGreaterThan(7)
        })
    })
    describe("TC6", () => {
        let result = mathOperations.product(2,8)
        test("2 * 8 to be ≥ 16", () => {
            expect(result).toBeGreaterThanOrEqual(16)
        })
    })
    describe("TC7", () => {
        let result = mathOperations.sum(0.1,0.2)
        test("0.1 + 0.2 to be close to 0.3", () => {
            // expect(result).toBe(0.3); This won't work because of rounding error
            expect(result).toBeCloseTo(0.3)
        })
    })
})