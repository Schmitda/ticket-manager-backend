"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Groups_1 = require("../../src/app/shared/types/Groups");
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    Authentication.getInstance = function () {
        if (Authentication.authentication === undefined) {
            Authentication.authentication = new Authentication();
        }
        return Authentication.authentication;
    };
    Authentication.routeIdOrAdmin = function () {
        return Authentication.hasIdOrAdmin();
    };
    Authentication.routeIdOrGroup = function (groups) {
        return function (req, res, next) {
            if (req.decoded.user._id === req.params.id) {
                next();
            }
            else {
                Authentication.hasGroup(groups)(req, res, next);
            }
        };
    };
    Authentication.hasIdOrAdmin = function () {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user && req.decoded.user._id === req.params.id) {
                next();
            }
            else {
                Authentication.hasGroup(Groups_1.Groups.ADMIN)(req, res, next);
            }
        };
    };
    Authentication.checkIsAdmin = function (req) {
        var groupNames = req.decoded.user.groups(function (group) { return group.name; });
        return (groupNames.indexOf(Groups_1.Groups.ADMIN) > -1);
    };
    Authentication.hasRights = function (hasRight) {
        return (function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                var permissions = [].concat.apply([], req.decoded.user.groups.map(function (group) { return group.permissions.map(function (permission) { return permission.shortName; }); }));
                if (typeof hasRight === 'string') {
                    if (permissions.indexOf(hasRight) > -1) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
                else {
                    var rightsToPass = hasRight.length;
                    var passedRights = 0;
                    for (var i = 0; i < hasRight.length; i++) {
                        if (permissions.indexOf(hasRight[i]) > -1) {
                            passedRights++;
                        }
                    }
                    if (passedRights === rightsToPass) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
            }
            else {
                if (req.headers['X-ACCESS-TOKEN']) {
                    res.sendExpired();
                }
                else {
                    res.sendNeedAuthentication();
                }
            }
        });
    };
    Authentication.hasOneOfTheGroups = function (groups) {
        return function (req, res, next) {
            if (req.decoded.user) {
                var groupNames = req.decoded.user.groups.map(function (group) { return group.name; });
                var passedRights = 0;
                for (var i = 0; i < groups.length; i++) {
                    if (groupNames.indexOf(groups[i]) > -1) {
                        passedRights++;
                    }
                }
                if (passedRights > 0) {
                    next();
                }
                else {
                    res.sendNotEnoughPermission();
                }
            }
            else {
                if (req.headers['X-ACCESS-TOKEN']) {
                    res.sendExpired();
                }
                else {
                    res.sendNeedAuthentication();
                }
            }
        };
    };
    Authentication.hasGroup = function (hasGroup) {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                var groups = req.decoded.user.groups.map(function (group) { return group.name; });
                if (typeof hasGroup === 'string') {
                    if (groups.indexOf(hasGroup) > -1) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
                else {
                    var rightsToPass = hasGroup.length;
                    var passedRights = 0;
                    for (var i = 0; i < hasGroup.length; i++) {
                        if (hasGroup.indexOf(hasGroup[i]) > -1) {
                            passedRights++;
                        }
                    }
                    if (passedRights === rightsToPass) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
            }
            else {
                if (req.headers['X-ACCESS-TOKEN']) {
                    res.sendExpired();
                }
                else {
                    res.sendNeedAuthentication();
                }
            }
        };
    };
    Authentication.routeIsAdmin = function () {
        return Authentication.hasGroup(Groups_1.Groups.ADMIN);
    };
    Authentication.routeIsAuthenticated = function () {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                next();
            }
            else {
                res.sendNeedAuthentication();
            }
        };
    };
    Authentication.apiRoutes = express.Router();
    return Authentication;
}());
exports.Authentication = Authentication;
//# sourceMappingURL=Authentication.js.map