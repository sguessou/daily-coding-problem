const maxsubarr = arr => {
    /*let result = 0;
    for (let i = 2; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum = arr.slice(j, j + i).reduce((a, b) => a + b, 0);
            result = Math.max(sum, result);
        }
    }*/
    // brute force approach
    let current_max = 0;
    let range = [...Array(arr.length).keys()];
    for (i of range) {
        for (j of range.slice(i)) {
            let sum = arr.slice(i, j + 1).reduce((a, b) => a + b, 0);
            current_max = Math.max(current_max, sum);
        }
    }
    return current_max;
    // Kadane's algorithm
    /*let max_ending_here = (max_so_far = 0);
    for (x of arr) {
        max_ending_here = Math.max(x, max_ending_here + x);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }
    return max_so_far;*/
};

module.exports = maxsubarr;
