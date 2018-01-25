import * as express from 'express';
import {MessageTypes} from '../../../src/app/shared/types/answer-types/MessageTypes';

export interface ExpressResponse extends express.Response {
  sendMessage(title: string,
              message: string,
              duration: number,
              status: number,
              type?: MessageTypes): void,

  valid(): void,

  invalid(): void,

  sendUnauthorized(): void,

  sendNotEnoughPermission(title?: string,
                          message?: string): void,

  sendExpired(title?: string, message?: string): void,

  sendNeedAuthentication(title?: string, message?: string): void,
}
