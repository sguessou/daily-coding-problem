/**
 * Given a word w and a string s, find all indices in s which are the starting locations of anagrams of w.
 * For example, given w is "ab" and s is "abxaba", return [0, 3, 4]
 */

// naive solution
/*const fn = (str, w) => {
    let l = w.length;
    let sorted = w
        .split('')
        .sort()
        .join('');
    let results = [];
    for (i = 0; i < str.length; i++) {
        let s = str
            .slice(i, l + i)
            .split('')
            .sort()
            .join('');
        if (s === sorted) results.push(i);
    }
    return results;
};*/

// O(s) time and space implementation
const fn = (str, w) => {
    const del_if_zero = (dict, char) => {
        if (dict[char] === 0) delete dict[char];
    };

    let result = [];

    let freq = {};
    for (c of w) {
        if (freq[c]) freq[c]++;
        else freq[c] = 1;
    }

    str.slice(0, w.length)
        .split('')
        .forEach(c => {
            freq[c] = freq[c] - 1;
            del_if_zero(freq, c);
        });

    if (Object.keys(freq).length === 0) result.push(0);

    for (let i = w.length; i <= str.length; i++) {
        let [start_char, end_char] = [str[i - w.length], str[i]];
        if (freq[start_char]) freq[start_char]++;
        else freq[start_char] = 1;
        del_if_zero(freq, start_char);

        if (freq[end_char]) freq[end_char]--;
        else freq[end_char] = -1;
        del_if_zero(freq, end_char);

        if (Object.keys(freq).length === 0) {
            let beginning_index = i - w.length + 1;
            result.push(beginning_index);
        }
    }

    return result;
};

module.exports = fn;
