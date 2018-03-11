var error     = require('../../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../../models/index'));

module.exports = {

    // Search All CPU avalaible
    Get: function(req, res)
    {
        // Store all conditions
        conditions = {};
        
        // Max result
        if (req.query.limit && (validator.isNumeric(req.query.limit) && req.query.limit > 0))
            max_limit = req.query.limit;
        else
            max_limit = 25;

        // Check if null
        if (req.query.name != null)
        {
            conditions["name"] = { $like: req.query.name + '%' };
        
            // Request Sequelize
            Models["computers_cpus"].findAll({ 
                attributes: ['id', 'name'],
                where: {
                    $and: conditions,
                },
                limit: max_limit
            }).then(function(object) {
                if (!object)
                    error.http_error(req, res, { code: 404 });
                else
                    error.http_success(req, res, { code: 200, data: object });
            }).error(function(err) {
                console.log('Error occured' + err);
                error.http_error(req, res, { code: 500 });
            });
        } else {
            error.http_error(req, res, { code: 400 });
        }
    },
};