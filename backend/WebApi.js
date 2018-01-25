"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const frontendRouter = require("./routes/frontend/frontendRouter");
const BackendConfig_1 = require("./config/BackendConfig");
const ExtendResponse_1 = require("./config/ExtendResponse");
const ExtendRequest_1 = require("./config/ExtendRequest");
const user_router_1 = require("./routes/backend/user.router");
class WebApi {
    constructor(app, port, securePort) {
        this.app = app;
        this.securePort = securePort;
        this.port = port;
        if (process.env.NODE_ENV) {
            process.env.NODE_ENV = process.env.NODE_ENV.trim();
        }
        else {
            process.env.NODE_ENV = 'development';
        }
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }
    myCustomErrorHandler(err, req, res, next) {
        if (err.type === RequestErrorTypes.UNAUTHORIZED) {
            res.status(400).json({ message: 'Unauthorized' });
        }
        else {
            if (err.code === 11000) {
                res.status(400).json(err);
            }
            else {
                res.status(400).json(err);
            }
        }
    }
    createProtectedPaths(app) {
    }
    configureMiddleware(app) {
        /*app.set('view engine', 'ejs');
        app.set('views', path.join(process.cwd() + '/dev_public/app/templates'));*/
        let db = BackendConfig_1.BackendConfig.getConfiguration();
        app.use(ExtendResponse_1.extendedResponse);
        app.use(ExtendRequest_1.extendRequest);
        app.use(methodOverride('X-HTTP-Method-Override'));
        // SETTING UP BODY-PARSER
        app.use(bodyParser({ limit: '2mb' }));
        app.use(bodyParser.json());
        // SETTING UP COOKIES
        app.use(cookieParser());
        // PARSE x-www-form-urlencode
        app.use(bodyParser.urlencoded({ extended: true }));
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
    verifyToken(req, res, next) {
    }
    configureRoutes(app) {
        app.use('/api/user', user_router_1.userRouter);
        app.use('/', frontendRouter);
        app.use(this.myCustomErrorHandler);
    }
    run() {
        this.app.listen(this.port);
    }
}
exports.WebApi = WebApi;
//# sourceMappingURL=WebApi.js.map