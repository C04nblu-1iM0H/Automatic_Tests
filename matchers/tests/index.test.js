const gt = require('../src/index');


describe('gt', () => {
    test('value > other', () => {
        expect(gt(3,1)).toBe(true);
    });
    test('value === other', () => {
        expect(gt(3,3)).toBe(false);
    });
    test('value < other', () => {
        expect(gt(1,3)).toBe(false);
    });
});