const mathOperations = require ('../math');

describe("Math operations test", () => {
    describe("TC1", () => { 
        test("'1+2' not to be 4", () => {
            // arrange and act
            let result = mathOperations.sum(1,2)
            // assert
            expect(result).not.toBe(4);
        })
    })
    describe("TC2", () => { 
        test("'10-2' to be 8", () => {
            // arrange and act
            let result = mathOperations.diff(10,2)
            // assert
            expect(result).toBe(8);
        })
    })
    describe("TC3", () => { 
        test("'2*8' to be 16", () => {
            // arrange and act
            let result = mathOperations.product(2,8)
            // assert
            expect(result).toBe(16);
        })
    })
    describe("TC4", () => {
        test("'1+2' to be <4, ≤3, >2", () => {
            let result = mathOperations.sum(1,2)
            expect(result).toBeLessThan(4)
            expect(result).toBeLessThanOrEqual(3)
            expect(result).toBeGreaterThan(2)
        })
    })
    describe("TC5", () => {
        test("'10-2' to be <10, >7 ", () => {
            let result = mathOperations.diff(10,2)
            expect(result).toBeLessThan(10)
            expect(result).toBeGreaterThan(7)
        })
    })
    describe("TC6", () => {
        test("'2*8' to be ≥16", () => {
            let result = mathOperations.product(2,8)
            expect(result).toBeGreaterThanOrEqual(16)
        })
    })
})