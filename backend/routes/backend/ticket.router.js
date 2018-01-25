"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const TicketMongooseClass_1 = require("../../models/mongoose-class/TicketMongooseClass");
const TicketMongoose_1 = require("../../models/TicketMongoose");
const ticketRouter = express.Router();
exports.ticketRouter = ticketRouter;
const ticketRoutesPopulate = [{
        path: 'createdBy'
    },];
exports.ticketRoutesPopulate = ticketRoutesPopulate;
const ticketMongoose = new TicketMongooseClass_1.TicketMongoose();
ticketRouter.post('/nameTaken', (req, res, next) => {
    const regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
    TicketMongoose_1.TicketMongooseModel.findOne({
        ticketname: regEx
    }).exec(function (err, ticket) {
        if (err) {
            next(err);
        }
        if (ticket === null) {
            res.json({
                taken: false
            });
        }
        else {
            if (ticket._id === req.body.id) {
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
ticketRouter.get('/', (req, res, next) => {
    ticketMongoose.model.find().populate(ticketRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch((err) => {
        next(err);
    });
});
ticketRouter.get('/:id', (req, res, next) => {
    TicketMongoose_1.TicketMongooseModel.findById(req.params.id).populate(ticketRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch((err) => {
        next(err);
    });
});
ticketRouter.post('/', (req, res, next) => {
    const ticket = new TicketMongoose_1.TicketMongooseModel(req.body);
    ticket.createdBy = req.decoded.ticket;
    ticket.save()
        .then((ticketRes) => {
        res.json(ticketRes);
    }).catch((err) => {
        next(err);
    });
});
ticketRouter.delete('/:id', (req, res, next) => {
    TicketMongoose_1.TicketMongooseModel.findByIdAndRemove(req.params.id, function (err, ticket) {
        if (err) {
            next(err);
        }
        else {
            res.json(true);
        }
    });
});
ticketRouter.put('/:id', (req, res, next) => {
    TicketMongoose_1.TicketMongooseModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true
    }, function (err, ticket) {
        if (err) {
            next(err);
        }
        else {
            res.json(ticket);
        }
    });
});
//# sourceMappingURL=ticket.router.js.map