const swin = require('./index');

test('products', () => {
    expect(typeof swin).toEqual('function');
});

test('products for array 1 generate right result', () => {
    expect(swin([3, 7, 5, 6, 9])).toEqual([1, 3]);
});
