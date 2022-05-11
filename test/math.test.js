const mathOperations = require ('../math');

describe("Math operations test", () => {
    test("1 + 2 not to be 4", () => {
        let result = mathOperations.sum(1,2) 
        expect(result).not.toBe(4)
    })
    test("10 - 2 to be 8", () => {
        let result = mathOperations.diff(10,2) 
        expect(result).toBe(8)
    })  
    test("2 * 8 to equal 16", () => {
        let result = mathOperations.product(2,8)
        expect(result).toEqual(16)
    })
    test("1 + 2 to be < 4, ≤ 3, > 2.5", () => {
        let result = mathOperations.sum(1,2)
        expect(result).toBeLessThan(4)
        expect(result).toBeLessThanOrEqual(3)
        expect(result).toBeGreaterThan(2.5)
    })
    test("10 - 2 to be < 10, > 7", () => {
        let result = mathOperations.diff(10,2)
        expect(result).toBeLessThan(10)
        expect(result).toBeGreaterThan(7)
    })
    test("2 * 8 to be ≥ 16", () => {
        let result = mathOperations.product(2,8)
        expect(result).toBeGreaterThanOrEqual(16)
    })
    test("0.1 + 0.2 to be close to 0.3", () => {
        let result = mathOperations.sum(0.1,0.2)
        // expect(result).toBe(0.3); This won't work because of rounding error
        expect(result).toBeCloseTo(0.3)
    })
})