import {ExpressRequest} from '../shared/types/ExpressRequest';
import {ExpressResponse} from '../shared/types/ExpressResponse';
import {MessageAnswerInterface} from '../../src/app/shared/types/answer-types/MessageAnswer';
import {MessageTypes} from '../../src/app/shared/types/answer-types/MessageTypes';


let extendedResponse = function extendResponse(req: ExpressRequest, res: ExpressResponse, next: Function) {
  res.sendMessage = function (title: string,
                              message: string,
                              duration: number = 2000,
                              status: number = 500,
                              type?: MessageTypes) {
    if (status > 400 && status < 511) {
      type = type || 'error';
    } else {
      type = type || 'primary';
    }
    res.status(status).json(<MessageAnswerInterface>{
      status: status,
      title: title,
      message: message,
      type: type,
      duration: duration
    })
  };



  res.sendUnauthorized = function () {
    res.status(400).json({message: 'Unauthorized'});
  };

  res.sendNotEnoughPermission = function (title: string = authErrors.notEnoughPermission.title, message: string = authErrors.notEnoughPermission.message) {
    res.status(401).json({
      title: title,
      message: message,
      sessionIssue: false
    });
  };

  res.sendExpired = function (title: string = authErrors.expired.title, message: string = authErrors.expired.message) {
    res.status(401).json({
      message: message,
      sessionIssue: true
    })
  };

  res.sendNeedAuthentication = function (title: string = authErrors.needAuth.title, message: string = authErrors.needAuth.message) {
    res.status(402).json({
      message: message,
      sessionIssue: false
    })
  };

  res.invalid = function () {
    res.json({valid: false});
  };

  res.valid = function () {
    res.json({valid: true});
  };

  next();
};

const authErrors = {
  notEnoughPermission: {
    title: 'Berechtigungsnfehler',
    message: 'Sie haben nicht genügend berechtigungen um diese Aktion auszuführen.'
  },
  expired: {
    title: 'Login-Daten abgelaufen',
    message: 'Für diese Aktion müssen sie angemeldet sein.'
  },
  needAuth: {
    title: 'Anmeldung benötigt',
    message: ' Für diese Aktion müssen sie angemeldet sein'
  }
};

export {extendedResponse, authErrors};
