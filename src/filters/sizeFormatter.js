module.exports = function (size) {
    var result;

    switch (true) {
        case (size === null || size === '' || isNaN(size)):
            result = '-';
            break;

        case (size >= 0 && size < 1024):
            result = size + ' B';
            break;

        case (size >= 1024 && size < Math.pow(1024, 2)):
            result = Math.round(size / 1024 * 100) / 100 + ' K';
            break;

        case (size >= Math.pow(1024, 2) && size < Math.pow(1024, 3)):
            result = Math.round(size / Math.pow(1024, 2) * 100) / 100 + ' M';
            break;

        case (size >= Math.pow(1024, 3) && size < Math.pow(1024, 4)):
            result = Math.round(size / Math.pow(1024, 3) * 100) / 100 +' G';
            break;

        default:
            result = Math.round(size / Math.pow(1024, 4) * 100) / 100 + ' T';
    }

    return result;
};