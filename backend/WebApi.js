var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var frontendRouter = require('./routes/frontend/frontendRouter');
var BackendConfig_1 = require('./config/BackendConfig');
var ExtendResponse_1 = require('./config/ExtendResponse');
var ExtendRequest_1 = require('./config/ExtendRequest');
var user_router_1 = require("./routes/backend/user.router");
var WebApi = (function () {
    function WebApi(app, port, securePort) {
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
    WebApi.prototype.myCustomErrorHandler = function (err, req, res, next) {
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
    };
    WebApi.prototype.createProtectedPaths = function (app) {
    };
    WebApi.prototype.configureMiddleware = function (app) {
        /*app.set('view engine', 'ejs');
        app.set('views', path.join(process.cwd() + '/dev_public/app/templates'));*/
        var db = BackendConfig_1.BackendConfig.getConfiguration();
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
    };
    WebApi.prototype.verifyToken = function (req, res, next) {
        next();
    };
    WebApi.prototype.configureRoutes = function (app) {
        app.use('/api/user', user_router_1.userRouter);
        app.use('/', frontendRouter);
        app.use(this.myCustomErrorHandler);
    };
    WebApi.prototype.run = function () {
        this.app.listen(this.port);
    };
    return WebApi;
})();
exports.WebApi = WebApi;
//# sourceMappingURL=WebApi.js.map