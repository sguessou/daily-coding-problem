const products = require('./index');

test('products', () => {
    expect(typeof products).toEqual('function');
});

test('products for array 1 generate right result', () => {
    expect(products([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test('products for array 2 generate right result', () => {
    expect(products([3, 2, 1])).toEqual([2, 3, 6]);
});
