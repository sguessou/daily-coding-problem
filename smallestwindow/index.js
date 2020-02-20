function swin(arr) {
    /*let sorted = [...arr].sort();
    let left, right;

    arr.forEach((e, i) => {
        if (arr[i] !== sorted[i]) {
            if (!left) left = i;
            else right = i;
        }
    });

    return [left, right];*/

    // O(n) solution
    let min_seen = Number.POSITIVE_INFINITY;
    let max_seen = Number.NEGATIVE_INFINITY;
    let left, right;

    let i = 0;
    while (i < arr.length) {
        max_seen = Math.max(arr[i], max_seen);
        if (arr[i] < max_seen) right = i;
        i++;
    }

    i = arr.length - 1;
    while (i >= 0) {
        min_seen = Math.min(arr[i], min_seen);
        if (arr[i] > min_seen) left = i;
        i--;
    }
    return [left, right];
}

module.exports = swin;
