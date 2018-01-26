import express = require('express');
import bodyParser = require('body-parser');
import methodOverride = require('method-override');
import cookieParser = require('cookie-parser');
import jwt = require('jsonwebtoken');
import frontendRouter = require('./routes/frontend/frontendRouter');
import {ExpressRequest} from './shared/types/ExpressRequest';
import {BackendConfig} from './config/BackendConfig';
import {extendedResponse} from './config/ExtendResponse';
import {extendRequest} from './config/ExtendRequest';
import {FrontAndBackendUtility} from './helper/FrontAndBackendUtility';
import {userRouter} from "./routes/backend/user.router";
import {ticketRouter} from "./routes/backend/ticket.router";


export class WebApi {
    private port: number;
    private securePort: number;

    constructor(private app: express.Express, port: number, securePort: number) {
        this.securePort = securePort;
        this.port = port;
        if (process.env.NODE_ENV) {
            process.env.NODE_ENV = process.env.NODE_ENV.trim();
        } else {
            process.env.NODE_ENV = 'development';
        }
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    public myCustomErrorHandler(err: any, req: ExpressRequest, res: express.Response, next: Function) {
       /* if (err.type === RequestErrorTypes.UNAUTHORIZED) {
            res.status(400).json({message: 'Unauthorized'});
        } else {
            if (err.code === 11000) {
                res.status(400).json(err);
            } else {
                res.status(400).json(err);
            }
        }*/
       next(err);
    }

    private createProtectedPaths(app: express.Express) {

    }

    private configureMiddleware(app: express.Express) {
        /*app.set('view engine', 'ejs');
        app.set('views', path.join(process.cwd() + '/dev_public/app/templates'));*/
        let db = BackendConfig.getConfiguration();
        app.use(extendedResponse);
        app.use(extendRequest);
        app.use(methodOverride('X-HTTP-Method-Override'));
        // SETTING UP BODY-PARSER
        app.use(bodyParser({limit: '2mb'}));
        app.use(bodyParser.json());
        // SETTING UP COOKIES
        app.use(cookieParser());
        // PARSE x-www-form-urlencode
        app.use(bodyParser.urlencoded({extended: true}));
        /*if (process.env.NODE_ENV === 'production') {
            app.use(express.static(__dirname + '/../src/assets/'));
            app.use(express.static(__dirname + '/../dist/'));
            app.use(express.static(__dirname + '/../dist/assets'));
        } else {
            app.use('/protected', express.static(__dirname + '/../protectedAssets/'));
            app.use(express.static(__dirname + '/../src/assets/'));
        }*/
        app.use(this.verifyToken);
        this.createProtectedPaths(app);
        app.set('secret', db.secret);
    }

    private verifyToken(req, res, next) {
        next();
    }

    private configureRoutes(app: express.Express) {

        app.use('/api/user', userRouter);
        app.use('/api/ticket', ticketRouter);
        app.use('/', frontendRouter);
        app.use(this.myCustomErrorHandler);

    }

    public run() {
        this.app.listen(this.port)
    }
}
