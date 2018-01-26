import express = require('express');
import {UserMongooseModel} from '../../models/UserMongoose';
import {UserDBDInterface} from '../../models/database-document-interface/UserDBDInterface';
import {ExpressRequest} from '../../shared/types/ExpressRequest';
import {ExpressResponse} from '../../shared/types/ExpressResponse';
import {UserMongoose} from "../../models/mongoose-class/UserMongooseClass";

const userRouter = express.Router();
const userRoutesPopulate = [{
    path: 'createdBy'
},];
const userMongoose = new UserMongoose();
userRouter.post('/nameTaken', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    const regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
    UserMongooseModel.findOne({
        username: regEx
    }).exec(function (err: any, user: UserDBDInterface) {
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
        .then(function (result: UserDBDInterface[]) {
            res.json(result)
        }).catch((err: any) => {
        next(err);
    })
});

userRouter.post('/checkToken', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    UserMongooseModel.findOne({_id: req.body.token.replace("TOKEN:", "")}).exec((err, user) => {
        if (err) {
            res.json({valid: false});
        } else {
            res.json({user: user, token: "TOKEN:" + user._id});
        }
    })
});

userRouter.post('/login', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    UserMongooseModel.findOne({email: req.body.email, password: req.body.password}).exec((err, user) => {
        if (err) {
            next(err);
        } else {
            res.json({user: user, token: "TOKEN:" + user._id});
        }
    })
});

userRouter.get('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    UserMongooseModel.findById(req.params.id).populate(userRoutesPopulate).exec()
        .then(function (result: UserDBDInterface) {
            res.json(result)
        }).catch((err: any) => {
        next(err);
    })
});
userRouter.post('/', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    const user = new UserMongooseModel(req.body);
    user.save()
        .then((userRes: UserDBDInterface) => {
            res.json(userRes);
        }).catch((err: any) => {
        next(err);
        let user = new UserMongooseModel(req.body);
        user.save()
            .then((userRes: UserDBDInterface) => {
                res.json(userRes);
            }).catch((err: any) => {
            next(err);

        });
    });
});
userRouter.delete('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
    UserMongooseModel.findByIdAndRemove(req.params.id, function (err: any, user: UserDBDInterface) {
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
        function (err: any, user: UserDBDInterface) {
            if (err) {
                next(err);
            } else {
                res.json(user);
            }
        });
});
export {
    userRoutesPopulate,
    userRouter
};