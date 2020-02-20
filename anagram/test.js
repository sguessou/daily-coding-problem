const fn = require('./index');

test('anagram', () => {
    expect(typeof fn).toEqual('function');
});

test('returns the right indices', () => {
    expect(fn('abxaba', 'ab')).toEqual([0, 3, 4]);
});
