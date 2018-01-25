import {UserInterface} from '../models/interface/user/user.interface';
import {Mailer} from './Mailer';
import {MailAddresses} from '../shared/types/MailAddresses';
import {OrderInterface} from '../models/interface/order/order.interface';

export class MailImplementation {

  public static sendNewRegistered(user: UserInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Herzlich willkommen bei ananné – ihrer natürlichen Wirkstoffskosmetik',
      'new_registered.mjml',
      {salutation: this.createSalutation(user)}
    );
    return mailer.send();
  }

  public static sendVerificationMail(user: UserInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Ihre Registrierung – bitte verifizieren Sie Ihre Mail-Adresse',
      'verification_mail.mjml',
      {salutation: this.createSalutation(user)}
    );
    return mailer.send();
  }

  public static sendNewsletterSubscription(user: UserInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'ananné Newsletter – Herzlich willkommen!',
      'newsletter_subscription.mjml',
      {salutation: this.createSalutation(user)}
    );
    return mailer.send();
  }


  public static sendInviteBusiness(user: UserInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'ananné Newsletter – Herzlich willkommen!',
      'newsletter_subscription.mjml',
      {salutation: this.createSalutation(user)}
    );
    return mailer.send();
  }

  public static sendBusinessPlan(email: string) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Geschäftspräsentation ananné',
      'business_plan.mjml',
      {}
    );
    return mailer.send();
  }

  public static sendForgotPassword(user: UserInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Passwort zurücksetzten',
      'forgot_password.mjml',
      {salutation: this.createSalutation(user)}
    );
    return mailer.send();
  }

  public static sendOrderConfirmation(order: OrderInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Ihre Bestellung bei ananne.com',
      'order_confirmation.mjml',
      {
        salutation: this.createSalutation(order.user),
        order: order,
      }
    );
    return mailer.send();
  }

  public static sendOrderCanceled(order: OrderInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Ihre Bestellung wurde storniert',
      'order_canceled.mjml',
      {
        salutation: this.createSalutationPolite(),
        order: order,
      }
    );
    return mailer.send();
  }

  public static sendOrderSent(order: OrderInterface) {
    let mailer = new Mailer();
    mailer.setOptions(
      MailAddresses.getEMailAddresses().TEST,
      [MailAddresses.getEMailAddresses().DANIEL_SCHMITZ],
      'Ihre Bestellung ist unterwegs',
      'order_sent.mjml',
      {
        salutation: this.createSalutationPolite(),
        order: order,
      }
    );
    return mailer.send();
  }


  public static createSalutationPolite() {
    return "Sehr geehrte Kundin, sehr geehrter Kunde,"
  }

  public static createSalutation(user: UserInterface) {
    if (user.gender === 'm') {
      return "Lieber Herr " + user.firstname + " " + user.lastname + ",";
    } else if (user.gender === 'f') {
      return "Liebe Frau " + user.firstname + " " + user.lastname + ",";
    }
  }

}
