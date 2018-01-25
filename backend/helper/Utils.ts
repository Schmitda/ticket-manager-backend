import {UserInterface} from '../../src/app/features/user/shared/user.interface';
import jwt = require('jsonwebtoken');
import {BackendConfig} from '../config/BackendConfig';
import * as fs from 'fs';

export class Utils {
  public static createToken(user: UserInterface) {
    return jwt.sign(<any>{user: user}, BackendConfig.getConfiguration().secret, {
      expiresIn: '24h'
    });
  }

  public static copyFile(source: string, target: string): Promise<null> {
    return new Promise(function (resolve, reject) {
      let rd = fs.createReadStream(source);
      rd.on('error', rejectCleanup);
      let wr = fs.createWriteStream(target);
      wr.on('error', rejectCleanup);

      function rejectCleanup(err) {
        rd.destroy();
        wr.end();
        reject(err);
      }

      wr.on('finish', resolve);
      rd.pipe(wr);
    });
  }

  public static getDatePrefix(date: Date = new Date()): string {
    let year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();
    month = (month > 9) ? month : '0' + month;
    day = (day > 9) ? day : '0' + day;
    return year + '' + month + '' + day;
  }

  public static getDateFormatted(date: Date = new Date()): string {
    let year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();
    month = (month > 9) ? month : '0' + month;
    day = (day > 9) ? day : '0' + day;
    return '' + day + '.' + month + '.' + year;
  }

  public static getDateTimePrefix(date: Date = new Date()): string {
    let datePrefix = Utils.getDatePrefix(date);
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();
    let hours: any = date.getHours();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    hours = hours > 9 ? hours : '0' + hours;
    return datePrefix + hours + minutes + seconds;
  }

}
