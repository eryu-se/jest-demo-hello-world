const mathOperations = require('../calculator');
 
describe("Calc test", () => {
    describe("TC1", () => { 
        test('adding 1 + 2 should return 3', () => {
            // arrange and act
            let result = mathOperations.sum(1,2)
            // assert
            expect(result).toBe(3);
        })
    })
    describe("TC2", () => { 
        test("subtracting 2 from 10 should return 8", () => {
            // arrange and act
            let result = mathOperations.diff(10,2)
            // assert
            expect(result).toBe(8);
        })
    })
    describe("TC3", () => { 
        test("multiplying 2 and 8 should return 16", () => {
            // arrange and act
            let result = mathOperations.product(2,8)
            // assert
            expect(result).toBe(16);
        })
    })
})