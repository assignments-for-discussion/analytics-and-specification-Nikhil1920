// Please try to use TypeScript instead of JavaScript if possible.
function average(numbers) {
    if (numbers.length > 0) {
        // !! Converts object to boolean
        // NaN, undefined and null returns false so they will be filtered out
        numbers = numbers.filter((n) => !!n);
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    } else {
        return NaN;
    }
}

module.exports = { average };
