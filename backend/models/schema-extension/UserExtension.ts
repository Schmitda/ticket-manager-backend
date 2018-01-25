import {
  Encrypter
} from '../../helper/Encrypter';
import {
  userSchema
} from '../UserMongoose';
import * as mongoose from "mongoose";
//userSchema.statics.xyz = function
//userSchema.methods.xyz = function
//userSchema.virtual('fullName').get(function(){})
export class ExtendUserSchema {
  public static _userSchema: mongoose.Schema;
  static get userSchema() {
    return this._userSchema;
  }
  static set userSchema(value) {
    this._userSchema = value;
  }
}