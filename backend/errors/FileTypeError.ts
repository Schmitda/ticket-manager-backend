import {CustomErrorBuilder} from './CustomErrorBuilder';

export class FileTypeError extends CustomErrorBuilder {

  constructor(message: string = 'Filetype not allowed!', type: string = 'fileType') {
    super(message, type);
  }
}
