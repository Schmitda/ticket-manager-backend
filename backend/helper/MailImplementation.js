var Mailer_1 = require('./Mailer');
var MailAddresses_1 = require('../shared/types/MailAddresses');
var MailImplementation = (function () {
    function MailImplementation() {
    }
    MailImplementation.sendNewRegistered = function (user) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Herzlich willkommen bei ananné – ihrer natürlichen Wirkstoffskosmetik', 'new_registered.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    };
    MailImplementation.sendVerificationMail = function (user) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Registrierung – bitte verifizieren Sie Ihre Mail-Adresse', 'verification_mail.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    };
    MailImplementation.sendNewsletterSubscription = function (user) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'ananné Newsletter – Herzlich willkommen!', 'newsletter_subscription.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    };
    MailImplementation.sendInviteBusiness = function (user) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'ananné Newsletter – Herzlich willkommen!', 'newsletter_subscription.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    };
    MailImplementation.sendBusinessPlan = function (email) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Geschäftspräsentation ananné', 'business_plan.mjml', {});
        return mailer.send();
    };
    MailImplementation.sendForgotPassword = function (user) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Passwort zurücksetzten', 'forgot_password.mjml', { salutation: this.createSalutation(user) });
        return mailer.send();
    };
    MailImplementation.sendOrderConfirmation = function (order) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung bei ananne.com', 'order_confirmation.mjml', {
            salutation: this.createSalutation(order.user),
            order: order,
        });
        return mailer.send();
    };
    MailImplementation.sendOrderCanceled = function (order) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung wurde storniert', 'order_canceled.mjml', {
            salutation: this.createSalutationPolite(),
            order: order,
        });
        return mailer.send();
    };
    MailImplementation.sendOrderSent = function (order) {
        var mailer = new Mailer_1.Mailer();
        mailer.setOptions(MailAddresses_1.MailAddresses.getEMailAddresses().TEST, [MailAddresses_1.MailAddresses.getEMailAddresses().DANIEL_SCHMITZ], 'Ihre Bestellung ist unterwegs', 'order_sent.mjml', {
            salutation: this.createSalutationPolite(),
            order: order,
        });
        return mailer.send();
    };
    MailImplementation.createSalutationPolite = function () {
        return "Sehr geehrte Kundin, sehr geehrter Kunde,";
    };
    MailImplementation.createSalutation = function (user) {
        if (user.gender === 'm') {
            return "Lieber Herr " + user.firstname + " " + user.lastname + ",";
        }
        else if (user.gender === 'f') {
            return "Liebe Frau " + user.firstname + " " + user.lastname + ",";
        }
    };
    return MailImplementation;
})();
exports.MailImplementation = MailImplementation;
//# sourceMappingURL=MailImplementation.js.map