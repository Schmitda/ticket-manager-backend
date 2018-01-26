import express = require('express');
import {
  UserInterface
} from '../models/interface/user/user.interface/User';
import {
  UserMongoose
} from '../models/mongoose-class/UserMongooseClass/User';
import {
  UserMongooseModel
} from '../models/UserMongoose/User';
import {
  UserDBDInterface
} from '../models/database-document-interface/UserDBDInterface/User';
import {
  ExpressRequest
} from '../../shared/types/ExpressRequest';
import {
  ExpressResponse
} from '../../shared/types/ExpressResponse';
const userRouter = express.Router();
const userRoutesPopulate = [{
  path: 'createdBy'
}, ];
const userMongoose = new UserMongoose();
userRouter.post('/nameTaken', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  const regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
  UserMongooseModel.findOne({
    username: regEx
  }).exec(function(err: any, user: UserDBDInterface) {
    if (err) {
      next(err);
    }
    if (user === null) {
      res.json({
        taken: false
      });
    } else {
      if (user._id === req.body.id) {
        res.json({
          taken: false
        });
      } else {
        res.json({
          taken: true,
          error: 'nameTaken'
        });
      }
    }
  })
});
userRouter.get('/', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  userMongoose.model.find().populate(userRoutesPopulate).exec()
    .then(function(result: UserDBDInterface[]) {
      res.json(result)
    }).catch((err: any) => {
      next(err);
    })
});
userRouter.get('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  UserMongooseModel.findById(req.params.id).populate(userRoutesPopulate).exec()
    .then(function(result: UserDBDInterface) {
      res.json(result)
    }).catch((err: any) => {
      next(err);
    })
});
userRouter.post('/', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  const user = new UserMongooseModel(req.body);
  user.createdBy = req.decoded.user;
  user.save()
    .then((userRes: UserDBDInterface) => {
      res.json(userRes);
    }).catch((err: any) => {
      next(err);
    });
});
userRouter.delete('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  UserMongooseModel.findByIdAndRemove(req.params.id, function(err: any, user: UserDBDInterface) {
    if (err) {
      next(err);
    } else {
      res.json(true);
    }
  });
});
userRouter.put('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  UserMongooseModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    },
    function(err: any, user: UserDBDInterface) {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
});
export {
  userRouter,
  userRoutesPopulate
};