const { practiceTest } = require("./index");

describe("Test for initial Jest setup.", () => {
    describe("practiceTest", () => { 
        // Testing suites can be used to organize your test responses. 
        // If all tests within the suite pass, then only the text from the highest level describe will be rendered to the screen. 
        // Every level that fails will have more and more detailed information if you set it up that way.
        test("Given 'Hello World!', return 'Hello World!'", () => {
            const received = "Hello World!";
            const expected = "Hello World!";
            expect(practiceTest(received)).toBe(expected);
        });
    });
});