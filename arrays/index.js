function products(arr) {
    let buff = [];
    let i = 0;

    while (i < arr.length) {
        buff.push(
            arr.slice(0, i).reduce((a, b) => a * b, 1) *
                arr.slice(i + 1).reduce((a, b) => a * b, 1)
        );
        i++;
    }

    return buff;
}

module.exports = products;
