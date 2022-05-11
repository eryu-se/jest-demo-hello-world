const mathOperations = require ('../math');

describe("Math operations test, hooks", () => {
    let input1 = 0
    let input2 = 0
    beforeAll(() => {
        console.log("beforeAll called")
    })
    afterAll(() => {
        console.log("afterAll called")
    })
    beforeEach(() => {
        console.log("beforeEach called")
        input1 = 1
        input2 = 2
    })
    afterEach(() => {
        console.log("afterEach called")
    })
    test("1 + 2 to be 3", () => {
        let result = mathOperations.sum(input1,input2)
        expect(result).toBe(3)
    })
})