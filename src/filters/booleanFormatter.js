module.exports = function (boolean, trueText, falseText) {
    var result;

    trueText = trueText || 'Yes';
    falseText = falseText || 'No';

    if (boolean === null || boolean === undefined || boolean === '') {
        result = '-';
    } else {
        result = boolean ? trueText : falseText;
    }

    return result;
};