const {makeCart} = require('../src/cart');

let cart = makeCart();
describe('Cart', () => {
    cart.addItem({ name: 'car', price: 3 }, 5);
    cart.addItem({ name: 'house', price: 10 }, 2);
    cart.addItem({ name: 'watche', price: 7 }, 1);

    test('add elem in basket', () => {
        expect(cart).not.toBeUndefined(undefined);
        expect(cart).toEqual([{ name: 'car', price:3, count:5}, { name: 'house', price: 10, count:2}, { name: 'watche', price: 7, count:1 }]);
    });
    test('output of the received element', () => {
        expect(cart.getItems()).toEqual([{ name: 'car', price:3, count:5}, { name: 'house', price: 10, count:2}, { name: 'watche', price: 7, count:1 }]);
        expect(cart.getItems().length).toEqual(3);
    });
    test('return the cost of the basket', () => {
        expect(cart.getCost()).not.toBeUndefined(undefined);
        expect(cart.getCost()).toEqual(42);
    });
    test('retrun the count of the basket', () => {
        expect(cart.getCount()).not.toBeUndefined(undefined);
        expect(cart.getCount()).toBeDefined();
        expect(cart.getCount()).toEqual(8);
    })
});

let basket = makeCart();
describe('delete an item from the trash', () => {
    basket.addItem({ name: 'car', price: 3 }, 5);
    basket.addItem({ name: 'house', price: 10 }, 2);
    basket.addItem({ name: 'watche', price: 7 }, 1);
    basket.remove('house');
    test('checking for deletion of an element', () => {
        expect(basket).toEqual([{ name: 'car', price: 3, count:5}, { name: 'watche', price: 7, count:1}]);
    })
});

afterAll(() => {
    cart = makeCart();
    basket = makeCart();
});