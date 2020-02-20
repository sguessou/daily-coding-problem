/**
 * Given an array of integers, return a new array where each element in the new array
 * is the number of smaller elements to the right of that element in the original input
 * array.
 * For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0].
 */

const fn = arr => {
    let results = [];
    // Naive approach
    for (i of [...Array(arr.length).keys()]) {
        let current = arr.slice(i, i + 1);
        results.push(
            arr
                .slice(i + 1)
                .reduce((acc, n) => (current > n ? acc + 1 : acc), 0)
        );
    }
    return results;
};

module.exports = fn;
