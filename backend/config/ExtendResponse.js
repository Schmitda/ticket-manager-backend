var extendedResponse = function extendResponse(req, res, next) {
    res.sendMessage = function (title, message, duration, status, type) {
        if (duration === void 0) { duration = 2000; }
        if (status === void 0) { status = 500; }
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
    res.sendNotEnoughPermission = function (title, message) {
        if (title === void 0) { title = authErrors.notEnoughPermission.title; }
        if (message === void 0) { message = authErrors.notEnoughPermission.message; }
        res.status(401).json({
            title: title,
            message: message,
            sessionIssue: false
        });
    };
    res.sendExpired = function (title, message) {
        if (title === void 0) { title = authErrors.expired.title; }
        if (message === void 0) { message = authErrors.expired.message; }
        res.status(401).json({
            message: message,
            sessionIssue: true
        });
    };
    res.sendNeedAuthentication = function (title, message) {
        if (title === void 0) { title = authErrors.needAuth.title; }
        if (message === void 0) { message = authErrors.needAuth.message; }
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
var authErrors = {
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