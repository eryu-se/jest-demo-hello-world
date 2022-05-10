const shoppingList = require ('../shoppinglist');

describe('Shopping list test', () => {
    describe('TC1', () => {
        test('shopping list to contain milk', () => {
            expect(shoppingList).toContain('milk')
        })    
    })
    describe('TC2', () => {
        test('shopping list to have lenght 5', () => {
            expect(shoppingList).toHaveLength(5)
        })
    })
})