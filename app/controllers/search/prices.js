var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Get price (today, all traders)
    GetId: function(req, res)
    {
        Models["computers_prices"].findAll({ 
            include: [ 
                { 
                    model: Models["computers_traders"]
                }
            ],
            attributes: [
                'last_price', 
                'price',
                'url',
                'created_at',
                'updated_at'
            ],
            where: { 
                computer_id: req.params.id
            },
        }).then(function(object) {
            redis.setex("price-"+req.params.id, 3600, JSON.stringify(object));
            error.http_success(req, res, { code: 200, data: object });
        }).error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
        });
    },

    GetCacheId: function(req, res)
    {
        redis.get("price-"+req.params.id, function (err, data) {
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