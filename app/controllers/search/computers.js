var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Get all computers
    Get: function(req, res)
    {
        includes = []
        conditions = {};
        max_limit = 25;

        // local table, search
        if (req.query.model != null && validator.isLength(req.query.model, { min: 0, max: 40 }))
            conditions["model"] = { $like: '%' + req.query.model + '%' };
        
        // OS
        if (req.query.os != null && req.query.os != "")
            conditions["osid"] = { $eq: req.query.os };

        // activity
        if (req.query.activity != null && req.query.activity != "")
            conditions["activityid"] = { $eq: req.query.activity };
            
        // Graphics
        if (req.query.gpu != null && req.query.gpu != "")
            conditions["gpuid"] = { $eq: req.query.gpu };
        
        if (req.query.gpu != null && req.query.gpu != "")
            conditions["gpuid"] = { $eq: req.query.gpu };
            
        // Chipsets
        if (req.query.chipset != null && req.query.chipset != "")
            conditions["chipsetid"] = { $eq: req.query.chipset };

        // Push all relation, search no avalailble
        includes.push(
            { model: Models["computers_os"], attributes: { exclude: ['id'] } },
            { model: Models["computers_cpus"], attributes: { exclude: ['id'] } },
            { model: Models["computers_gpus"], attributes: { exclude: ['id'] } },
            { model: Models["computers_chipsets"], attributes: { exclude: ['id'] } },
            { model: Models["computers_activities"], attributes: { exclude: ['id'] } },
            // { model: Models["computers_prices"], attributes: { exclude: ['id'] } },
            // { model: Models["computers_disks"], attributes: { exclude: ['id'] } },
        )
        
        // request
        Models["computers"].findAll({
            include: includes,
            where: {
                $and: conditions,
                active: true
            },
            attributes: [
                'id', 
                'model',  
                'picture', 
                'connector_available', 
                'weight',
                'length',
                'width', 
                'height', 
                'memory_size',
                'memory_type',
                'memory_max_size',
                'network',
                'webcam', 
                'updated_at', 
                'created_at'
            ],
            limit: max_limit
        })
        .then(function(computers){
            if (!computers)
                error.http_error(req, res, { code: 404 });
            else
                error.http_success(req, res, { code: 200, data: computers });
        })
        .error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
         })
    },

    // Get all computers
    GetId: function(req, res)
    {
        includes = []
        conditions = {};
        max_limit = 25;

        conditions['id'] = req.params.id

        // Push all relation, search no avalailble
        includes.push(
            { model: Models["computers_os"], attributes: { exclude: ['id'] } },
            { model: Models["computers_cpus"], attributes: { exclude: ['id'] } },
            { model: Models["computers_gpus"], attributes: { exclude: ['id'] } },
            { model: Models["computers_chipsets"], attributes: { exclude: ['id'] } },
            { model: Models["computers_activities"], attributes: { exclude: ['id'] } },
            // { model: Models["computers_prices"], attributes: { exclude: ['id'] } },
            // { model: Models["computers_disks"], attributes: { exclude: ['id'] } },
        )
        
        // request
        Models["computers"].findAll({
            include: includes,
            where: {
                $and: conditions,
                active: true
            },
            attributes: [
                'id', 
                'model',  
                'picture', 
                'connector_available', 
                'weight',
                'length',
                'width', 
                'height', 
                'memory_size',
                'memory_type',
                'memory_max_size',
                'network',
                'webcam', 
                'updated_at', 
                'created_at'
            ],
            limit: max_limit
        })
        .then(function(computers){
            if (!computers)
                error.http_error(req, res, { code: 404 });
            else
                error.http_success(req, res, { code: 200, data: computers });
        })
        .error(function(err) {
            console.log('Error occured' + err);
            error.http_error(req, res, { code: 500 });
         })
    },
}