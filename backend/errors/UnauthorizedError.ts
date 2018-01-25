import {CustomErrorBuilder} from './CustomErrorBuilder';
import {RequestErrorTypes} from '../../src/app/shared/types/RequestErrorTypes';

export class UnauthorizedError extends CustomErrorBuilder {
  constructor(msg: string) {
    super(msg, RequestErrorTypes.UNAUTHORIZED);
  }
}
