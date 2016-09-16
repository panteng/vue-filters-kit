module.exports = function (number, digits) {
    var result;

    if (digits === null || digits === undefined) {
        digits = 2;
    }

    digits = parseInt(digits);

    if (number === null || number === '' || isNaN(number)) {
        result = '-';
    } else {
        result = Math.round(number * Math.pow(10, digits) * 100) / Math.pow(10, digits) + '%';
    };

    return result;
};