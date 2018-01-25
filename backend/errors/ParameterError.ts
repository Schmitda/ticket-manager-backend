import {CustomErrorBuilder} from './CustomErrorBuilder';

export class ParameterError extends CustomErrorBuilder {

  constructor(message: string = 'Wrong parameter supplied', type: string) {
    super(message, type);
  }
}
