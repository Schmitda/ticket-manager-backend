import {ExpressResponse} from '../shared/types/ExpressResponse';
import {ExpressRequest} from '../shared/types/ExpressRequest';
import {UserMongoose, UserMongooseModel} from '../models/UserMongoose';

let extendRequest = function extendRequest(req: ExpressRequest, res: ExpressResponse, next: Function) {
  req.getUser = (): Promise<UserInterface> => {
    return new Promise((resolve, reject) => {
      if (req.decoded) {
        UserMongooseModel.findById(req.decoded.user._id).populate(UserMongoose.defaultPopulate).exec((err, user) => {
          if (err) {
            reject(err);
          }
          if (user) {
            resolve(user)
          } else {
            resolve(null);
          }
        })
      } else {
        resolve(null);
      }
    });
  };
  next();
};

export {extendRequest};
