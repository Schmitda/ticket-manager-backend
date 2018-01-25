"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const BackendConfig_1 = require("../config/BackendConfig");
const fs = require("fs");
class Utils {
    static createToken(user) {
        return jwt.sign({ user: user }, BackendConfig_1.BackendConfig.getConfiguration().secret, {
            expiresIn: '24h'
        });
    }
    static copyFile(source, target) {
        return new Promise(function (resolve, reject) {
            let rd = fs.createReadStream(source);
            rd.on('error', rejectCleanup);
            let wr = fs.createWriteStream(target);
            wr.on('error', rejectCleanup);
            function rejectCleanup(err) {
                rd.destroy();
                wr.end();
                reject(err);
            }
            wr.on('finish', resolve);
            rd.pipe(wr);
        });
    }
    static getDatePrefix(date = new Date()) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = (month > 9) ? month : '0' + month;
        day = (day > 9) ? day : '0' + day;
        return year + '' + month + '' + day;
    }
    static getDateFormatted(date = new Date()) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = (month > 9) ? month : '0' + month;
        day = (day > 9) ? day : '0' + day;
        return '' + day + '.' + month + '.' + year;
    }
    static getDateTimePrefix(date = new Date()) {
        let datePrefix = Utils.getDatePrefix(date);
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let hours = date.getHours();
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;
        hours = hours > 9 ? hours : '0' + hours;
        return datePrefix + hours + minutes + seconds;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map