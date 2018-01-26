var express = require('express');
var Ticket_1 = require('../models/mongoose-class/TicketMongooseClass/Ticket');
var Ticket_2 = require('../models/TicketMongoose/Ticket');
var ticketRouter = express.Router();
exports.ticketRouter = ticketRouter;
var ticketRoutesPopulate = [{
        path: 'createdBy'
    },];
exports.ticketRoutesPopulate = ticketRoutesPopulate;
var ticketMongoose = new Ticket_1.TicketMongoose();
ticketRouter.post('/nameTaken', function (req, res, next) {
    var regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
    Ticket_2.TicketMongooseModel.findOne({
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
ticketRouter.get('/', function (req, res, next) {
    ticketMongoose.model.find().populate(ticketRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
ticketRouter.get('/:id', function (req, res, next) {
    Ticket_2.TicketMongooseModel.findById(req.params.id).populate(ticketRoutesPopulate).exec()
        .then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err);
    });
});
ticketRouter.post('/', function (req, res, next) {
    var ticket = new Ticket_2.TicketMongooseModel(req.body);
    ticket.createdBy = req.decoded.ticket;
    ticket.save()
        .then(function (ticketRes) {
        res.json(ticketRes);
    }).catch(function (err) {
        next(err);
    });
});
ticketRouter.delete('/:id', function (req, res, next) {
    Ticket_2.TicketMongooseModel.findByIdAndRemove(req.params.id, function (err, ticket) {
        if (err) {
            next(err);
        }
        else {
            res.json(true);
        }
    });
});
ticketRouter.put('/:id', function (req, res, next) {
    Ticket_2.TicketMongooseModel.findByIdAndUpdate(req.params.id, {
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
//# sourceMappingURL=Ticket.js.map