import * as mongoose from 'mongoose';
import {
  Observable
} from 'rxjs/Observable';
import {
  TicketMongoose
} from "./mongoose-class/TicketMongooseClass";
import {
  TicketDBInterface
} from "./database-interface/TicketDBInterface";
import {
  ExtendTicketSchema
} from './schema-extension/TicketExtension';
import {
  TicketDBDInterface
} from './database-document-interface/TicketDBDInterface';
const ticketSchema = new mongoose.Schema({
  subject: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    default: null,
  },
  created: {
    type: Date,
    default: null,
  },
  urgent: {
    type: Boolean,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, {
  usePushEach: true
});
ExtendTicketSchema.ticketSchema = ticketSchema;
mongoose.model < TicketDBInterface > ('Ticket', ticketSchema);
let TicketMongooseModel = mongoose.model < TicketDBDInterface,
  TicketDBInterface > ('Ticket', ticketSchema);
let TicketMongooseInstance: TicketMongoose;
setImmediate(() => {
  TicketMongooseInstance = new TicketMongoose();
  TicketMongoose.staticModel = TicketMongooseModel;
});
export {
  TicketMongoose,
  ticketSchema,
  TicketMongooseInstance,
  TicketMongooseModel
}