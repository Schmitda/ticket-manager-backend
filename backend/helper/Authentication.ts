import express = require('express');
import {Groups} from "../../src/app/shared/types/Groups";
import {ExpressRequest} from '../shared/types/ExpressRequest';
import {ExpressResponse} from '../shared/types/ExpressResponse';


export class Authentication {
  private static authentication: Authentication;
  public static apiRoutes: express.Router = express.Router();

  public static getInstance(): Authentication {
    if (Authentication.authentication === undefined) {
      Authentication.authentication = new Authentication();
    }
    return Authentication.authentication;
  }

  private constructor() {

  }

  public static routeIdOrAdmin() {
    return Authentication.hasIdOrAdmin();
  }

  public static routeIdOrGroup(groups: string|string[]){
    return function (req: ExpressRequest, res: ExpressResponse, next: Function) {
      if (req.decoded.user._id === req.params.id) {
        next();
      }else{
        Authentication.hasGroup(groups)(req, res, next);
      }
    }
  }

  public static hasIdOrAdmin() {
    return function (req: ExpressRequest, res: ExpressResponse, next: Function) {
      if (req.decoded && req.decoded.user && req.decoded.user._id === req.params.id) {
        next();
      }else{
        Authentication.hasGroup(Groups.ADMIN)(req, res, next);
      }
    }
  }

  public static checkIsAdmin(req: ExpressRequest) {
    let groupNames = req.decoded.user.groups((group) => group.name);
    return (groupNames.indexOf(Groups.ADMIN) > -1);
  }

  public static hasRights(hasRight: string[] | string) {
    return (function (req, res, next) {
      if (req.decoded && req.decoded.user) {
        let permissions = [].concat.apply([], req.decoded.user.groups.map((group) => group.permissions.map(permission => permission.shortName)));
        if (typeof hasRight === 'string') {
          if (permissions.indexOf(hasRight) > -1) {
            next();
          } else {
            res.sendNotEnoughPermission();
          }
        } else {
          let rightsToPass = hasRight.length;
          let passedRights = 0;
          for (let i = 0; i < hasRight.length; i++) {
            if (permissions.indexOf(hasRight[i]) > -1) {
              passedRights++;
            }
          }
          if (passedRights === rightsToPass) {
            next();
          } else {
            res.sendNotEnoughPermission();
          }
        }
      } else {
        if (req.headers['X-ACCESS-TOKEN']) {
          res.sendExpired();
        } else {
          res.sendNeedAuthentication();
        }
      }
    });
  }

  public static hasOneOfTheGroups(groups: string[]) {
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
        } else {
          res.sendNotEnoughPermission();
        }
      } else {
        if (req.headers['X-ACCESS-TOKEN']) {
          res.sendExpired();
        } else {
          res.sendNeedAuthentication();
        }
      }
    };
  }

  public static hasGroup(hasGroup: string[] | string) {
    return function (req, res, next) {
      if (req.decoded && req.decoded.user) {
        let groups = req.decoded.user.groups.map((group) => group.name);
        if (typeof hasGroup === 'string') {
          if (groups.indexOf(hasGroup) > -1) {
            next();
          } else {
            res.sendNotEnoughPermission();
          }
        } else {
          let rightsToPass = hasGroup.length;
          let passedRights = 0;
          for (let i = 0; i < hasGroup.length; i++) {
            if (hasGroup.indexOf(hasGroup[i]) > -1) {
              passedRights++;
            }
          }
          if (passedRights === rightsToPass) {
            next();
          } else {
            res.sendNotEnoughPermission();
          }
        }
      } else {
        if (req.headers['X-ACCESS-TOKEN']) {
          res.sendExpired();
        } else {
          res.sendNeedAuthentication();
        }
      }
    };
  }

  public static routeIsAdmin() {
    return Authentication.hasGroup(Groups.ADMIN);
  }

  public static routeIsAuthenticated() {
    return function (req, res, next) {
      if (req.decoded && req.decoded.user) {
        next();
      } else {
        res.sendNeedAuthentication();
      }
    }
  }

}
