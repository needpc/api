var sequelize  = require('sequelize');
var path       = require('path');
var Middleware = require(path.join(__dirname, '/middleware'));

var CError            = require(path.join(__dirname, '/controllers/error'));
var CSearchComputer   = require(path.join(__dirname, '/controllers/search/computers'));
var CSearchOs         = require(path.join(__dirname, '/controllers/search/os'));
var CSearchGraphics   = require(path.join(__dirname, '/controllers/search/graphics'));
var CSearchCpus       = require(path.join(__dirname, '/controllers/search/cpus'));
var CSearchActivities = require(path.join(__dirname, '/controllers/search/activities'));
var CSearchquestions  = require(path.join(__dirname, '/controllers/search/ask'));

module.exports = function(app, passport) {

    app.get('/', function (req, res) {
        CError.http_success(req, res, { code: 200, message: "Hello World !" });
    });

    //////////////////////////////////////////////
    // Search all components
    //////////////////////////////////////////////
    app.route('/api/v1/search/computers/')
        .get(CSearchComputer.Get);
    
    app.route('/api/v1/search/computers/:id')
        .get(CSearchComputer.GetId);
    
    app.route('/api/v1/search/os/')
        .get(CSearchOs.Get);
    
    app.route('/api/v1/search/graphics/')
        .get(CSearchGraphics.Get);
    
    app.route('/api/v1/search/cpus/')
        .get(CSearchCpus.Get);
    
    app.route('/api/v1/search/activities/')
        .get(CSearchActivities.Get);

    app.route('/api/v1/ask')
        .get(CSearchquestions.GetAsk);
    //////////////////////////////////////////////

    // =====================================
    // LOGIN ===============================
    // =====================================
    app.post('/v1/auth/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info)
        {
            if (err)
                CError.http_error(req, res, { code: 500 });
            if (user)
            {
                req.session.user = {};
                req.session.user.id = user.dataValues.id;
                req.session.user.email = user.dataValues.email;
                console.log(req.session);

                return CError.http_success(req, res, { code: 200, message: info.message });
            } else {
                // user not found (404 is very explicite, so 400)
                CError.http_error(req, res, { code: 400 });
            }
        })(req, res, next);
    });


    // =====================================
    // SIGNUP ==============================
    // =====================================
    app.post('/v1/auth/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info)
        {
            if (err)
                return CError.http_error(req, res, { code: 500 });
            if (user)
                return CError.http_success(req, res, { code: 201, message: info.message });
            if (!user && info.message)
                return CError.http_error(req, res, { code: 400 });

            return Error.http_Error(req, res, { code: 400 });
        })(req, res, next);
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/v1/auth/logout', Middleware.isLoggedIn, function(req, res) {
        req.logout();
        return CError.http_success(req, res, { code: 200, message: "logout" });
    });

    app.get('/v1/admin/', Middleware.isAdminIn, function(req, res) {
        return res.status(200).send({ Error: false, session: req.session.passport });
    });

    // All routes not found => 404
    app.all('*', function (req, res) {
        return CError.http_error(req, res, { code: 404, message: "Not found" })
    });
};