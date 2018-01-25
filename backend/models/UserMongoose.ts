import * as mongoose from 'mongoose';
import {
  Observable
} from 'rxjs/Observable';
import {
  UserMongoose
} from "./mongoose-class/UserMongooseClass";
import {
  UserDBInterface
} from "./database-interface/UserDBInterface";
import {
  ExtendUserSchema
} from './schema-extension/UserExtension';
import {
  UserDBDInterface
} from './database-document-interface/UserDBDInterface';
const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    default: null,
  },
  Lastname: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
}, {
  usePushEach: true
});
ExtendUserSchema.userSchema = userSchema;
mongoose.model < UserDBInterface > ('User', userSchema);
let UserMongooseModel = mongoose.model < UserDBDInterface,
  UserDBInterface > ('User', userSchema);
let UserMongooseInstance: UserMongoose;
setImmediate(() => {
  UserMongooseInstance = new UserMongoose();
  UserMongoose.staticModel = UserMongooseModel;
});
export {
  UserMongoose,
  userSchema,
  UserMongooseInstance,
  UserMongooseModel
}