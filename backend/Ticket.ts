import express = require('express');
import {
  TicketInterface
} from '../models/interface/ticket/ticket.interface/Ticket';
import {
  TicketMongoose
} from '../models/mongoose-class/TicketMongooseClass/Ticket';
import {
  TicketMongooseModel
} from '../models/TicketMongoose/Ticket';
import {
  TicketDBDInterface
} from '../models/database-document-interface/TicketDBDInterface/Ticket';
import {
  ExpressRequest
} from '../../shared/types/ExpressRequest';
import {
  ExpressResponse
} from '../../shared/types/ExpressResponse';
const ticketRouter = express.Router();
const ticketRoutesPopulate = [{
  path: 'createdBy'
}, ];
const ticketMongoose = new TicketMongoose();
ticketRouter.post('/nameTaken', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  const regEx = new RegExp('(^|\s)' + req.body.toCheck + '\\b', 'i');
  TicketMongooseModel.findOne({
    ticketname: regEx
  }).exec(function(err: any, ticket: TicketDBDInterface) {
    if (err) {
      next(err);
    }
    if (ticket === null) {
      res.json({
        taken: false
      });
    } else {
      if (ticket._id === req.body.id) {
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
ticketRouter.get('/', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  ticketMongoose.model.find().populate(ticketRoutesPopulate).exec()
    .then(function(result: TicketDBDInterface[]) {
      res.json(result)
    }).catch((err: any) => {
      next(err);
    })
});
ticketRouter.get('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  TicketMongooseModel.findById(req.params.id).populate(ticketRoutesPopulate).exec()
    .then(function(result: TicketDBDInterface) {
      res.json(result)
    }).catch((err: any) => {
      next(err);
    })
});
ticketRouter.post('/', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  const ticket = new TicketMongooseModel(req.body);
  ticket.createdBy = req.decoded.ticket;
  ticket.save()
    .then((ticketRes: TicketDBDInterface) => {
      res.json(ticketRes);
    }).catch((err: any) => {
      next(err);
    });
});
ticketRouter.delete('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  TicketMongooseModel.findByIdAndRemove(req.params.id, function(err: any, ticket: TicketDBDInterface) {
    if (err) {
      next(err);
    } else {
      res.json(true);
    }
  });
});
ticketRouter.put('/:id', (req: ExpressRequest, res: ExpressResponse, next: Function) => {
  TicketMongooseModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    },
    function(err: any, ticket: TicketDBDInterface) {
      if (err) {
        next(err);
      } else {
        res.json(ticket);
      }
    });
});
export {
  ticketRouter,
  ticketRoutesPopulate
};