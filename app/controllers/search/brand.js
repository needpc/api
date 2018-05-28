var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));
var redis     = require(path.join(__dirname, '../../services/redis'));

module.exports = {

    // Search All Brand avalaible
    Get: function(req, res)
    {
        // Request Sequelize
        Models["computers_brands"].findAll({ 
            attributes: [
                'id',
                'name'
            ],
        }).then(function(object) {
            redis.setex("brand", 3600, JSON.stringify(object));
            error.http_success(req, res, { 
                code: 200, 
                data: object 
            });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { 
                code: 500 
            });
        });
    },

    GetCache: function(req, res, next) {
        redis.get("brand", function (err, data) {
            if (err) throw err;
        
            if (data != null) {
                error.http_success(req, res, { 
                    code: 200, 
                    data: JSON.parse(data)
                });
            } else {
                next();
            }
        });
    }
};