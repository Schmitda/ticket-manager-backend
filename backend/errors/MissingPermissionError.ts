import {CustomErrorBuilder} from './CustomErrorBuilder';

export class FileTypeError extends CustomErrorBuilder {

  constructor(message: string = 'Sie haben nicht genügend berechtigungen um diese Aktion auszuführen.', type: string = 'missingPermissionError') {
    super(message, type, 401);
  }
}
