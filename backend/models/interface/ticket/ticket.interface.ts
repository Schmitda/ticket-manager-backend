import {
  UserInterface
} from "../user/user.interface";
export interface TicketInterface {
  _id: any;
  subject: string,
    body: string,
    created: Date,
    urgent: boolean,
    type: string,
    owner: UserInterface,
}