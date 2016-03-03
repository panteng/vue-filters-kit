module.exports = function (boolean, trueLabel, falseLabel) {
    var result;

    trueLabel = trueLabel || 'Yes';
    falseLabel = falseLabel || 'No';

    if (boolean === null || boolean === undefined || boolean === '') {
        result = '-';
    } else {
        result = boolean ? trueLabel : falseLabel;
    }

    return result;
};