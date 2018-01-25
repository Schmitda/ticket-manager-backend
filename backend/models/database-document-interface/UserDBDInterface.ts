import * as mongoose from 'mongoose';
import {
  UserInterface
} from '../interface/user/user.interface';
export interface UserDBDInterface extends UserInterface, mongoose.Document {}