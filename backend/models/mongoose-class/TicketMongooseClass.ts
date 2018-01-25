import * as mongoose from 'mongoose';
import {
  MongooseBase
} from "../MongooseBase";
import {
  TicketDBDInterface
} from "../database-document-interface/TicketDBDInterface";
import {
  groupSchema
} from "../GroupMongoose";
import {
  TicketDBInterface
} from "../database-interface/TicketDBInterface";
import {
  ticketSchema
} from "../TicketMongoose";
export class TicketMongoose extends MongooseBase < TicketDBDInterface > {
  constructor() {
    super();
    this._model = mongoose.model < TicketDBInterface > ('Ticket', ticketSchema);
  }
}