var moment = require('moment');

module.exports = function (timestamp, format) {
    var result;

    timestamp = parseInt(timestamp);

    if (!timestamp){
        result = '-';
    } else if (format) {
        result = moment(timestamp).format(format);
    } else {
        result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }

    return result;
};