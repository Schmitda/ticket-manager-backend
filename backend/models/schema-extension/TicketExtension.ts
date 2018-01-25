import {
  Encrypter
} from '../../helper/Encrypter';
import {
  ticketSchema
} from '../TicketMongoose';
import * as mongoose from "mongoose";
//ticketSchema.statics.xyz = function
//ticketSchema.methods.xyz = function
//ticketSchema.virtual('fullName').get(function(){})
export class ExtendTicketSchema {
  public static _ticketSchema: mongoose.Schema;
  static get ticketSchema() {
    return this._ticketSchema;
  }
  static set ticketSchema(value) {
    this._ticketSchema = value;
  }
}