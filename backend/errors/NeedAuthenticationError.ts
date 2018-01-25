import {CustomErrorBuilder} from './CustomErrorBuilder';

export class FileTypeError extends CustomErrorBuilder {

  constructor(message: string = 'Für diese Aktion müssen sie angemeldet sein.', type: string = 'needAuthentication') {
    super(message, type, 401);
  }
}
