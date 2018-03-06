var error     = require('../../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../../models/index'));

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
        
        if (req.query.webcam_included != null && validator.isBoolean(req.query.webcam_included))
            conditions["is_webcam_included"] = req.query.webcam_included;

        if (req.query.os_included != null && validator.isBoolean(req.query.os_included))
            conditions["is_os_included"] = req.query.os_included;

        ////////////////////////
        // activity
        if (req.query.activity != null && validator.isLength(req.query.activity, { min: 0, max: 40 }))
            includes.push({ model: Models.Computer.MComputer_activity, as: 'activity', attributes: { exclude: 'id' },  where: { name: req.query.activity } })
        else
            includes.push({ model: Models.Computer.MComputer_activity, as: 'activity', attributes: { exclude: 'id' } })

        // OS
        if (req.query.os != null && validator.isLength(req.query.os, { min: 0, max: 40 }))
            includes.push({ model: Models.Computer.MComputer_os, as: 'os', attributes: { exclude: 'id' },  where: { name: req.query.os } })
        else
            includes.push({ model: Models.Computer.MComputer_os, as: 'os', attributes: { exclude: 'id' } })
        
        // Keyboard
        if (req.query.keyboard != null && validator.isLength(req.query.keyboard, { min: 0, max: 40 }))
            includes.push({ model: Models.Computer.MComputer_keyboard, as: 'keyboards', attributes: { exclude: 'id' },  where: { type: req.query.keyboard } })
        else
            includes.push({ model: Models.Computer.MComputer_keyboard, as: 'keyboards', attributes: { exclude: 'id' } })
            
        // Graphics
        if (req.query.graphics != null && validator.isLength(req.query.graphics, { min: 0, max: 40 }))
            includes.push({ model: Models.Computer.MComputer_graphic, as: 'graphics', attributes: { exclude: 'id' },  where: { model: req.query.graphics } })
        else
            includes.push({ model: Models.Computer.MComputer_graphic, as: 'graphics', attributes: { exclude: 'id' } })

        // Push all relation, search no avalailble
        includes.push({ model: Models.Computer.MComputer_network, as: 'networks', attributes: { exclude: 'id' } },
            { model: Models["ComputersScreens"], as: 'display', attributes: { exclude: 'id' } },
            { model: Models["ComputersDisks"], as: 'disks', attributes: { exclude: 'id' } },
            { model: Models["ComputersColors"], as: 'colors', attributes: { exclude: 'id' } },
            { model: Models["ComputersBrands"], as: 'brands', attributes: { exclude: 'id' } },
        )
        
        // request
        Models["Computers"].findAll({
            include: includes,
            where: {
                $and: conditions,
                is_active: true
            },
            attributes: [
                'id', 
                'model', 
                'designation', 
                'url', 
                'picture', 
                'connector_avalaible', 
                'size_width', 
                'size_height', 
                'is_os_included', 
                'is_webcam_included', 
                'is_wifi_included', 
                'is_vr_ready', 
                'garanty_year', 
                'updatedAt', 
                'createdAt'
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