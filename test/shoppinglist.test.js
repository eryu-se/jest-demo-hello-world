const shoppingList = require ('../shoppinglist');

describe('Shopping list test', () => {
    test('shopping list to contain milk', () => {
        expect(shoppingList).toContain('milk')
    })    
    test('shopping list to have lenght 5', () => {
        expect(shoppingList).toHaveLength(5)
    })
})