function add(numbers) {
    if (numbers == "") {
        return 0;
    }
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    const allNumbers = numbers.split(delimiter).map(item => parseInt(item));
    const negativeNumbers = allNumbers.filter((item) => item < 0);
    if (negativeNumbers.length > 0) {
        throw new Error('Negative numbers are not allowed');
    }
    const result = allNumbers.filter((item) => item > 0).reduce((acc, item) => acc + parseInt(item), 0);
    return result;
}

module.exports = add;