import bcrypt  = require('bcryptjs');
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

export class Encrypter {
  public generateRandom(length: number): Observable<string> {
    return Observable.create(function (observer) {
      bcrypt.genSalt(length, function (err, code) {
        observer.next(code);
        observer.complete();
      });
    })
  };

  public encryptPassword(password: string): Observable<any> {
    return Observable.create(function (o: Observer<any>) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          o.next(hash);
          o.complete();
        });
      });
    });
  };

  public verifyPassword(password: string, hash: string): Observable<boolean> {
    return Observable.create(function (o) {
      bcrypt.compare(password, hash, function (err, res) {
        if (err) {
          o.next(false);
        } else {
          o.next(res);
          o.complete();
        }
      });
    });
  };

  public createResetUrl(random: string, email: string) {
    return (random + new Buffer(email).toString('base64')).replace(/\//g, 'slash').replace(/\$/g, 'dollar').replace(/\./g, 'point').replace(/\=/g, 'eq')
  }
}
