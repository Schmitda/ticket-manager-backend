import {CustomErrorBuilder} from './CustomErrorBuilder';

export class FileTypeError extends CustomErrorBuilder {

  constructor(message: string = 'Die geladene Ressource konnte nicht ihnen zugeorndet werden. Versuchen Sie es erneut.', type: string = 'ressourceAccessError') {
    super(message, type);
  }
}
