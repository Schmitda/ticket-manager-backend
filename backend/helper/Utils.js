var jwt = require('jsonwebtoken');
var BackendConfig_1 = require('../config/BackendConfig');
var fs = require('fs');
var Utils = (function () {
    function Utils() {
    }
    Utils.createToken = function (user) {
        return jwt.sign({ user: user }, BackendConfig_1.BackendConfig.getConfiguration().secret, {
            expiresIn: '24h'
        });
    };
    Utils.copyFile = ;
    return Utils;
})();
exports.Utils = Utils;
null > {
    return: new Promise(function (resolve, reject) {
        var rd = fs.createReadStream(source);
        rd.on('error', rejectCleanup);
        var wr = fs.createWriteStream(target);
        wr.on('error', rejectCleanup);
        function rejectCleanup(err) {
            rd.destroy();
            wr.end();
            reject(err);
        }
        wr.on('finish', resolve);
        rd.pipe(wr);
    })
};
getDatePrefix(date, Date = new Date());
string;
{
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = (month > 9) ? month : '0' + month;
    day = (day > 9) ? day : '0' + day;
    return year + '' + month + '' + day;
}
getDateFormatted(date, Date = new Date());
string;
{
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = (month > 9) ? month : '0' + month;
    day = (day > 9) ? day : '0' + day;
    return '' + day + '.' + month + '.' + year;
}
getDateTimePrefix(date, Date = new Date());
string;
{
    var datePrefix = Utils.getDatePrefix(date);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hours = date.getHours();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    hours = hours > 9 ? hours : '0' + hours;
    return datePrefix + hours + minutes + seconds;
}
//# sourceMappingURL=Utils.js.map