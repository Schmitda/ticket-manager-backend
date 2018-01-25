export class BackendConfig {
  public static getConfiguration(): any {
    if (process.env.NODE_ENV) {
      process.env.NODE_ENV = process.env.NODE_ENV.trim();
    } else {
      process.env.NODE_ENV = 'development';
    }
    switch (process.env.NODE_ENV.trim()) {
      case undefined:
      case 'development':
        return {
          url: 'mongodb://localhost:27017/ticket',
          salt: "asd",
          secret: "asd",
          supportedLanguages: ['de', 'fr'],
          defaultLanguage: 'de',
          nodeMailer: {
            host: 'smtp-mail.outlook.com',
            secureConnection: false,
            port: 587,
            auth: {
              user: 'res',
              pass: "res"
            }
          },
          filestoreSessionOptions: {
            path: "./sessions",
            useAsync: true,
            reapInterval: 5000,
            retries: 5,
            maxAge: 86400
          },
        };
    }
  };
}
