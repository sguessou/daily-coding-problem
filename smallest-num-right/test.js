const fn = require('./index');

test('products', () => {
    expect(typeof fn).toEqual('function');
});

test('mixed array', () => {
    expect(fn([3, 4, 9, 6, 1])).toEqual([1, 1, 2, 1, 0]);
});
