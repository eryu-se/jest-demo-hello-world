const mathOperations = require ('../calculator');

describe("Calc test, hooks", () => {
    let input1 = 0
    let input2 = 0
   
    beforeAll(() => {
        console.log("beforeAll called");
    })
    afterAll(() => {
        console.log("afterAll called");
    })
    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    })
    afterEach(() => {
        console.log("afterEach called");
    })
    describe("TC1", () => {
        test('adding 1 + 2 should return 3', () => {
            // arrange and act
            let result = mathOperations.sum(input1,input2)
            // assert
            expect(result).toBe(3);
        })
    })
})