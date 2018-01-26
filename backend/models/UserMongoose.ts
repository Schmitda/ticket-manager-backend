import * as mongoose from 'mongoose';
import {
  Observable
} from 'rxjs/Observable';
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
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  age: {
    type: Number,
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
setImmediate(() => {

});
export {
  userSchema,
  UserMongooseInstance,
  UserMongooseModel
}