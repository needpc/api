var error     = require('../../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../../models/index'));

module.exports = {

    // Search all keyboard availbles
    // @limit BDD
    // @name (like AZERTY etc)
    // @language (like Francais)
    Get: function(req, res)
    {
        conditions = {};
        
        if (req.query.limit && (validator.isNumeric(req.query.limit) && req.query.limit > 0))
            max_limit = req.query.limit;
        else
            max_limit = 25;

        if (req.query.name != null)
        {
            conditions["type"] = { $like: req.query.name + '%' };
            conditions["language"] = { $like: req.query.name + '%' };

            Models["ComputerKeyboards"].findAll({ 
                attributes: ['id', 'type', 'language'], 
                where: {
                    $or: conditions,
                },
                limit: max_limit
            }).then(function(computers_os){
                if (!computers_os)
                    error.http_error(req, res, { code: 404 });
                else
                    error.http_success(req, res, { code: 200, data: computers_os });
            }).error(function(err) {
                console.log('Error occured' + err);
                error.http_error(req, res, { code: 500 });
            });
        } else {
            error.http_error(req, res, { code: 400 });
        }
    },
};