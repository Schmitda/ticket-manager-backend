"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailer_1 = require("./Mailer");
const MailAddresses_1 = require("../shared/types/MailAddresses");
class MailImplementation {
    static sendNewRegistered(user) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Herzlich willkommen bei ananné – ihrer natürlichen Wirkstoffskosmetik', 'new_registered.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    }
    static sendVerificationMail(user) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Registrierung – bitte verifizieren Sie Ihre Mail-Adresse', 'verification_mail.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    }
    static sendNewsletterSubscription(user) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'ananné Newsletter – Herzlich willkommen!', 'newsletter_subscription.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    }
    static sendInviteBusiness(user) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'ananné Newsletter – Herzlich willkommen!', 'newsletter_subscription.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    }
    static sendBusinessPlan(email) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Geschäftspräsentation ananné', 'business_plan.mjml', {});
        return mailer.send();
    }
    static sendForgotPassword(user) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Passwort zurücksetzten', 'forgot_password.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    }
    static sendOrderConfirmation(order) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung bei ananne.com', 'order_confirmation.mjml', {
            salutation: this.createSalutation(order.user),
            order: order,
        });
        return mailer.send();
    }
    static sendOrderCanceled(order) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung wurde storniert', 'order_canceled.mjml', {
            salutation: this.createSalutationPolite(),
            order: order,
        });
        return mailer.send();
    }
    static sendOrderSent(order) {
        let mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung ist unterwegs', 'order_sent.mjml', {
            salutation: this.createSalutationPolite(),
            order: order,
        });
        return mailer.send();
    }
    static createSalutationPolite() {
        return "Sehr geehrte Kundin, sehr geehrter Kunde,";
    }
    static createSalutation(user) {
        if (user.gender === 'm') {
            return "Lieber Herr " + user.firstname + " " + user.lastname + ",";
        }
        else if (user.gender === 'f') {
            return "Liebe Frau " + user.firstname + " " + user.lastname + ",";
        }
    }
}
exports.MailImplementation = MailImplementation;
//# sourceMappingURL=MailImplementation.js.map