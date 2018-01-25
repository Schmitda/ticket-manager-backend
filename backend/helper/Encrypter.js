var bcrypt = require('bcryptjs');
var Observable_1 = require('rxjs/Observable');
var Encrypter = (function () {
    function Encrypter() {
    }
    Encrypter.prototype.generateRandom = function (length) {
        return Observable_1.Observable.create(function (observer) {
            bcrypt.genSalt(length, function (err, code) {
                observer.next(code);
                observer.complete();
            });
        });
    };
    ;
    Encrypter.prototype.encryptPassword = function (password) {
        return Observable_1.Observable.create(function (o) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    o.next(hash);
                    o.complete();
                });
            });
        });
    };
    ;
    Encrypter.prototype.verifyPassword = function (password, hash) {
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
    };
    ;
    Encrypter.prototype.createResetUrl = function (random, email) {
        return (random + new Buffer(email).toString('base64')).replace(/\//g, 'slash').replace(/\$/g, 'dollar').replace(/\./g, 'point').replace(/\=/g, 'eq');
    };
    return Encrypter;
})();
exports.Encrypter = Encrypter;
//# sourceMappingURL=Encrypter.js.map