var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));
var moment    = require('moment');

module.exports = {

    // Get price (today, all traders)
    GetId: function(req, res)
    {
        // Get date
        var today = new Date();

        // Check param id is an integer
        if (validator.isInt(req.params.id)) {

            // Request BDD
            Models["computers_prices"].findAll({ 
                include: [ 
                    { model: Models["computers_traders"], attributes: { exclude: ['id', 'description', 'created_at', 'updated_at'] } },
                ],
                attributes: ['updateAt', 'price'],
                where: { 
                    computer_id: req.params.id,
                    date: moment().format('L')
                },
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
            error.http_error(req, res, { code: 400 })
        }
    }
};