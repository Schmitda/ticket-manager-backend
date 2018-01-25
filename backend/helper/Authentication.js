"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Groups_1 = require("../../src/app/shared/types/Groups");
class Authentication {
    constructor() {
    }
    static getInstance() {
        if (Authentication.authentication === undefined) {
            Authentication.authentication = new Authentication();
        }
        return Authentication.authentication;
    }
    static routeIdOrAdmin() {
        return Authentication.hasIdOrAdmin();
    }
    static routeIdOrGroup(groups) {
        return function (req, res, next) {
            if (req.decoded.user._id === req.params.id) {
                next();
            }
            else {
                Authentication.hasGroup(groups)(req, res, next);
            }
        };
    }
    static hasIdOrAdmin() {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user && req.decoded.user._id === req.params.id) {
                next();
            }
            else {
                Authentication.hasGroup(Groups_1.Groups.ADMIN)(req, res, next);
            }
        };
    }
    static checkIsAdmin(req) {
        let groupNames = req.decoded.user.groups((group) => group.name);
        return (groupNames.indexOf(Groups_1.Groups.ADMIN) > -1);
    }
    static hasRights(hasRight) {
        return (function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                let permissions = [].concat.apply([], req.decoded.user.groups.map((group) => group.permissions.map(permission => permission.shortName)));
                if (typeof hasRight === 'string') {
                    if (permissions.indexOf(hasRight) > -1) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
                else {
                    let rightsToPass = hasRight.length;
                    let passedRights = 0;
                    for (let i = 0; i < hasRight.length; i++) {
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
    }
    static hasOneOfTheGroups(groups) {
        return function (req, res, next) {
            if (req.decoded.user) {
                let groupNames = req.decoded.user.groups.map((group) => group.name);
                let passedRights = 0;
                for (let i = 0; i < groups.length; i++) {
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
    }
    static hasGroup(hasGroup) {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                let groups = req.decoded.user.groups.map((group) => group.name);
                if (typeof hasGroup === 'string') {
                    if (groups.indexOf(hasGroup) > -1) {
                        next();
                    }
                    else {
                        res.sendNotEnoughPermission();
                    }
                }
                else {
                    let rightsToPass = hasGroup.length;
                    let passedRights = 0;
                    for (let i = 0; i < hasGroup.length; i++) {
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
    }
    static routeIsAdmin() {
        return Authentication.hasGroup(Groups_1.Groups.ADMIN);
    }
    static routeIsAuthenticated() {
        return function (req, res, next) {
            if (req.decoded && req.decoded.user) {
                next();
            }
            else {
                res.sendNeedAuthentication();
            }
        };
    }
}
Authentication.apiRoutes = express.Router();
exports.Authentication = Authentication;
//# sourceMappingURL=Authentication.js.map