"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_1 = require("../models/UserMongoose/User");
const userRouter = express.Router();
exports.userRouter = userRouter;
const userRoutesPopulate = [{
        path: 'createdBy'
    },];
exports.userRoutesPopulate = userRoutesPopulate;
const userMongoose = new UserMongoose();
userRouter.post('/nameTaken', (req, res, next) => {
    const regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
    User_1.UserMongooseModel.findOne({
        username: regEx
    }).exec(function (err, user) {
        if (err) {
            next(err);
        }
        if (user === null) {
            res.json({
                taken: false
            });
        }
        else {
            if (user._id === req.body.id) {
                res.json({
                    taken: false
                });
            }
            else {
                res.json({
                    taken: true,
                    error: 'nameTaken'
                });
            }
        }
    });
});
userRouter.get('/', (req, res, next) => {
    userMongoose.model.find().populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch((err) => {
        next(err);
    });
});
userRouter.get('/:id', (req, res, next) => {
    User_1.UserMongooseModel.findById(req.params.id).populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch((err) => {
        next(err);
    });
});
userRouter.post('/', (req, res, next) => {
    const user = new User_1.UserMongooseModel(req.body);
    user.createdBy = req.decoded.user;
    user.save()
        .then((userRes) => {
        res.json(userRes);
    }).catch((err) => {
        next(err);
    });
});
userRouter.delete('/:id', (req, res, next) => {
    User_1.UserMongooseModel.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            next(err);
        }
        else {
            res.json(true);
        }
    });
});
userRouter.put('/:id', (req, res, next) => {
    User_1.UserMongooseModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true
    }, function (err, user) {
        if (err) {
            next(err);
        }
        else {
            res.json(user);
        }
    });
});
//# sourceMappingURL=User.js.map