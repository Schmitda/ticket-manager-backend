"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let extendedResponse = function extendResponse(req, res, next) {
    res.sendMessage = function (title, message, duration = 2000, status = 500, type) {
        if (status > 400 && status < 511) {
            type = type || 'error';
        }
        else {
            type = type || 'primary';
        }
        res.status(status).json({
            status: status,
            title: title,
            message: message,
            type: type,
            duration: duration
        });
    };
    res.sendUnauthorized = function () {
        res.status(400).json({ message: 'Unauthorized' });
    };
    res.sendNotEnoughPermission = function (title = authErrors.notEnoughPermission.title, message = authErrors.notEnoughPermission.message) {
        res.status(401).json({
            title: title,
            message: message,
            sessionIssue: false
        });
    };
    res.sendExpired = function (title = authErrors.expired.title, message = authErrors.expired.message) {
        res.status(401).json({
            message: message,
            sessionIssue: true
        });
    };
    res.sendNeedAuthentication = function (title = authErrors.needAuth.title, message = authErrors.needAuth.message) {
        res.status(402).json({
            message: message,
            sessionIssue: false
        });
    };
    res.invalid = function () {
        res.json({ valid: false });
    };
    res.valid = function () {
        res.json({ valid: true });
    };
    next();
};
exports.extendedResponse = extendedResponse;
const authErrors = {
    notEnoughPermission: {
        title: 'Berechtigungsnfehler',
        message: 'Sie haben nicht genügend berechtigungen um diese Aktion auszuführen.'
    },
    expired: {
        title: 'Login-Daten abgelaufen',
        message: 'Für diese Aktion müssen sie angemeldet sein.'
    },
    needAuth: {
        title: 'Anmeldung benötigt',
        message: ' Für diese Aktion müssen sie angemeldet sein'
    }
};
exports.authErrors = authErrors;
//# sourceMappingURL=ExtendResponse.js.map