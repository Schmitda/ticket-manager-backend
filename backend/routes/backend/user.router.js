var express = require('express');
var UserMongoose_1 = require('../../models/UserMongoose');
var UserMongooseClass_1 = require("../../models/mongoose-class/UserMongooseClass");
var userRouter = express.Router();
var userRoutesPopulate = [{
        path: 'createdBy'
    },];
var userMongoose = new UserMongooseClass_1.UserMongoose();
userRouter.post('/nameTaken', function (req, res, next) {
    var regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
    UserMongoose_1.UserMongooseModel.findOne({
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
userRouter.get('/', function (req, res, next) {
    userMongoose.model.find().populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
userRouter.post('/checkToken', function (req, res, next) {
    UserMongoose_1.UserMongooseModel.findOne({ _id: req.body.token.replace("TOKEN:", "") }).exec(function (err, user) {
        if (err) {
            res.json({ valid: false });
        }
        else {
            res.json({ user: user, token: "TOKEN:" + user._id });
        }
    });
});
userRouter.post('/login', function (req, res, next) {
    UserMongoose_1.UserMongooseModel.findOne({ email: req.body.email, password: req.body.password }).exec(function (err, user) {
        if (err) {
            next(err);
        }
        else {
            res.json({ user: user, token: "TOKEN:" + user._id });
        }
    });
});
userRouter.get('/:id', function (req, res, next) {
    UserMongoose_1.UserMongooseModel.findById(req.params.id).populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
userRouter.post('/', function (req, res, next) {
    var user = new UserMongoose_1.UserMongooseModel(req.body);
    user.save()
        .then(function (userRes) {
        res.json(userRes);
    }).catch(function (err) {
        next(err);
        var user = new UserMongoose_1.UserMongooseModel(req.body);
        user.save()
            .then(function (userRes) {
            res.json(userRes);
        }).catch(function (err) {
            next(err);
        });
    });
    userRouter.delete('/:id', function (req, res, next) {
        UserMongoose_1.UserMongooseModel.findByIdAndRemove(req.params.id, function (err, user) {
            if (err) {
                next(err);
            }
            else {
                res.json(true);
            }
        });
    });
    userRouter.put('/:id', function (req, res, next) {
        UserMongoose_1.UserMongooseModel.findByIdAndUpdate(req.params.id, {
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
});
//# sourceMappingURL=user.router.js.map