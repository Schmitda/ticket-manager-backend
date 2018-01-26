var express = require('express');
var User_1 = require('../models/UserMongoose/User');
var userRouter = express.Router();
exports.userRouter = userRouter;
var userRoutesPopulate = [{
        path: 'createdBy'
    },];
exports.userRoutesPopulate = userRoutesPopulate;
var userMongoose = new UserMongoose();
userRouter.post('/nameTaken', function (req, res, next) {
    var regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
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
userRouter.get('/', function (req, res, next) {
    userMongoose.model.find().populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
userRouter.get('/:id', function (req, res, next) {
    User_1.UserMongooseModel.findById(req.params.id).populate(userRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
userRouter.post('/', function (req, res, next) {
    var user = new User_1.UserMongooseModel(req.body);
    user.createdBy = req.decoded.user;
    user.save()
        .then(function (userRes) {
        res.json(userRes);
    }).catch(function (err) {
        next(err);
    });
});
userRouter.delete('/:id', function (req, res, next) {
    User_1.UserMongooseModel.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            next(err);
        }
        else {
            res.json(true);
        }
    });
});
userRouter.put('/:id', function (req, res, next) {
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