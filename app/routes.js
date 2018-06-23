var sequelize  = require('sequelize');
var path       = require('path');
var Middleware = require(path.join(__dirname, '/middleware'));

var CError            = require(path.join(__dirname, '/controllers/error'));
var CSearchComputer   = require(path.join(__dirname, '/controllers/search/computers'));
var CSearchOs         = require(path.join(__dirname, '/controllers/search/os'));
var CSearchGpu        = require(path.join(__dirname, '/controllers/search/gpu'));
var CSearchCpu        = require(path.join(__dirname, '/controllers/search/cpu'));
var CSearchBrand      = require(path.join(__dirname, '/controllers/search/brand'));
var CSearchChipset    = require(path.join(__dirname, '/controllers/search/chipset'));
var CSearchActivities = require(path.join(__dirname, '/controllers/search/activity'));
var CSearchPrice      = require(path.join(__dirname, '/controllers/search/prices'));
var CSearchAsk        = require(path.join(__dirname, '/controllers/search/ask'));

module.exports = function(app, passport) {
    
    //////////////////////////////////////////////
    // SEARCH
    //////////////////////////////////////////////
    app.route('/v1/search/computers/')
        .get(CSearchComputer.Get);
    
    app.route('/v1/search/computers/:id')
        .get(CSearchComputer.GetCacheId, CSearchComputer.GetId);

    app.route('/v1/search/os/')
        .get(CSearchOs.GetCache, CSearchOs.Get);
    
    app.route('/v1/search/gpu/')
        .get(CSearchGpu.GetCache, CSearchGpu.Get);
    
    app.route('/v1/search/cpu/')
        .get(CSearchCpu.GetCache, CSearchCpu.Get);

    app.route('/v1/search/chipset/')
        .get(CSearchChipset.GetCache, CSearchChipset.Get);
    
    app.route('/v1/search/activity/')
        .get(CSearchActivities.GetCache, CSearchActivities.Get);

    app.route('/v1/search/brand/')
        .get(CSearchBrand.GetCache, CSearchBrand.Get);

    app.route('/v1/search/price/:id')
        .get(CSearchPrice.GetCacheId, CSearchPrice.GetId);

    app.route('/v1/ask')
        .get(CSearchAsk.Get);
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