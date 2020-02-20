const maxsubarr = require('./index');

test('products', () => {
    expect(typeof maxsubarr).toEqual('function');
});

test('mixed array', () => {
    expect(maxsubarr([34, -50, 42, 14, -5, 86])).toEqual(137);
});

test('array of negative numbers', () => {
    expect(maxsubarr([-34, -50, -42, -1, -5, -86])).toEqual(0);
});
