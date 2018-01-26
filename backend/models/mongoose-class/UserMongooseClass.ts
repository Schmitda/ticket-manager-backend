import * as mongoose from 'mongoose';
import {
  MongooseBase
} from "../MongooseBase";
import {
  UserDBDInterface
} from "../database-document-interface/UserDBDInterface";
import {
  groupSchema
} from "../GroupMongoose";
import {
  UserDBInterface
} from "../database-interface/UserDBInterface";
import {
  userSchema
} from "../UserMongoose";
export class UserMongoose extends MongooseBase < UserDBDInterface > {
  constructor() {
    super();
    this._model = mongoose.model < UserDBInterface > ('User', userSchema);
  }
}