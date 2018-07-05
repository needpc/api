// Framework ExpressJS
var express        = require('express');
var app            = express();
var http           = require('http');

// Packages
var path           = require('path');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cookieParser   = require('cookie-parser');
var morgan         = require("morgan");
var cors           = require('cors');
var passport       = require('passport');
var expressSession = require('express-session');
var fs             = require('fs');
var compression    = require("compression");
var helmet         = require("helmet");
var colors         = require(path.join(__dirname, '/app/services/color'));

var ports = {
    http: process.env.APP_HTTP_PORT || 8080,
};

// Locale app
app.locals.title = 'My API';
app.locals.strftime = require('strftime');
app.locals.email = 'me@myapi.com';


// configuration ===========================================

// expose favicon & robots.txt & docs
app.use('/', express.static(path.join(__dirname, '/public')));

// Access Logs
app.use(morgan(':remote-addr :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent - :response-time[2] ms"'))

// Parse application/json 
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Read cookies (needed for auth)
app.use(cookieParser());

// Accept cross domain *
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://www.needpc.fr');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// Fast & light request
app.use(compression());

// Anti XSS
app.use(helmet());


// Init local session Passport
app.use(expressSession({
    secret: process.env.APP_SESSION_SECRET || 'RANDOM',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Routes ==================================================
require(path.join(__dirname, 'app/routes'))(app, passport);
require(path.join(__dirname, 'app/services/passport'))(passport);

// Start app ===============================================
console.log(colors.info('RESTful API running, PID : ' + process.pid));
http.createServer(app).listen(ports.http, () => { 
    console.log(colors.verbose('Port serveur HTTP (API) : ' + ports.http)); 
});

module.exports = app;