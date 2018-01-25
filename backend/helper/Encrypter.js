"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const Observable_1 = require("rxjs/Observable");
class Encrypter {
    generateRandom(length) {
        return Observable_1.Observable.create(function (observer) {
            bcrypt.genSalt(length, function (err, code) {
                observer.next(code);
                observer.complete();
            });
        });
    }
    ;
    encryptPassword(password) {
        return Observable_1.Observable.create(function (o) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    o.next(hash);
                    o.complete();
                });
            });
        });
    }
    ;
    verifyPassword(password, hash) {
        return Observable_1.Observable.create(function (o) {
            bcrypt.compare(password, hash, function (err, res) {
                if (err) {
                    o.next(false);
                }
                else {
                    o.next(res);
                    o.complete();
                }
            });
        });
    }
    ;
    createResetUrl(random, email) {
        return (random + new Buffer(email).toString('base64')).replace(/\//g, 'slash').replace(/\$/g, 'dollar').replace(/\./g, 'point').replace(/\=/g, 'eq');
    }
}
exports.Encrypter = Encrypter;
//# sourceMappingURL=Encrypter.js.map