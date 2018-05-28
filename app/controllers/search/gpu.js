var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Search all Graphic Card
    Get: function(req, res)
    {
        conditions = {};
        
        // check if query name is not null
        if (req.query.name != null)
            conditions["name"] = { $like: req.query.name + '%' };

        Models["computers_gpus"].findAll({ 
            attributes: [
                'id', 
                'name',
                'score'
            ],
            where: {
                $and: conditions,
            },
        }).then(function(object){
            if (!object)
                error.http_error(req, res, { code: 404 });
            else
                error.http_success(req, res, { code: 200, data: object });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
        });
    },
};