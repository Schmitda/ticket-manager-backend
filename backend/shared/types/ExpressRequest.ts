import * as Express from 'express';
import {UserInterface} from '../../../src/app/features/user/shared/user.interface';
import {UserDBDInterface} from '../../models/database-document-interface/UserDBDInterface';

export interface ExpressRequest extends Express.Request {
  session: any;
  decoded: {
    user: UserInterface,
    [key: string]: any
  };
  files: any;
  // TODO FIX UserDBInterface
  getUser: () => Promise<UserDBDInterface>;
}
