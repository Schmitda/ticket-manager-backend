import * as mongoose from 'mongoose';
import {
  TicketInterface
} from '../interface/ticket/ticket.interface';
export interface TicketDBDInterface extends TicketInterface, mongoose.Document {}