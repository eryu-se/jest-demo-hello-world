const mathOperations = require('../calculator');
 
describe("Calc test", () => {
    describe("TC1", () => { 
        test("'1+2' to be '3'", () => {
            // arrange and act
            let result = mathOperations.sum(1,2)
            // assert
            expect(result).toBe(3);
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
        test("'2*8' to be '16'", () => {
            // arrange and act
            let result = mathOperations.product(2,8)
            // assert
            expect(result).toBe(16);
        })
    })
})