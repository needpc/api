var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Search All CPU avalaible
    Get: function(req, res)
    {
        // Request Sequelize
        Models["computers_cpus"].findAll({ 
            attributes: [
                'id', 
                'name',
                'score'
            ],
        }).then(function(object) {
                error.http_success(req, res, { code: 200, data: object });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
        });
    },
};