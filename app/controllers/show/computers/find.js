var error     = require('../../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../../models/index'));

module.exports = {

    // Search computer ID
    GetId: function(req, res)
    {
        // if id is an integer
        if (validator.isInt(req.params.id))
        {
            // Request => OK || error => return
            Models.Computer.MComputer.findAll({
                include: [ 
                    { model: Models["ComputersOs"], as: 'os', attributes: { exclude: 'id' } },
                    { model: Models["ComputersNetworks"], as: 'networks', attributes: { exclude: 'id' } },
                    { model: Models["ComputersKeyboards"], as: 'keyboards', attributes: { exclude: 'id' } },
                    { model: Models["ComputersGraphics"], as: 'graphics', attributes: { exclude: 'id' } },
                    { model: Models["ComputersScreens"], as: 'display', attributes: { exclude: 'id' } },
                    { model: Models["ComputersDisks"], as: 'disks', attributes: { exclude: 'id' } },
                    { model: Models["ComputersCpus"], as: 'cpus', attributes: { exclude: 'id' } },
                    { model: Models["ComputersColors"], as: 'colors', attributes: { exclude: 'id' } },
                    { model: Models["ComputersChipsets"], as: 'chipsets', attributes: { exclude: 'id' } },
                    { model: Models["ComputersBrands"], as: 'brands', attributes: { exclude: 'id' } },
                    { model: Models["ComputerActivities"], as: 'activity', attributes: { exclude: 'id' } },
                ],
                where: { 
                    id: req.params.id,
                    is_active: true
                },
                attributes: ['id', 'model', 'designation', 'picture', 'url', 'connector_avalaible', 'size_width', 'size_height', 'is_os_included', 'is_webcam_included', 'is_wifi_included', 'is_vr_ready', 'garanty_year', 'updatedAt', 'createdAt'],
            })
            .then(function(computers){
                if (!computers)
                    error.http_error(req, res, { code: 404 });
                else
                    error.http_success(req, res, { code: 200, data: computers })
            })
            .error(function(err){
               console.log('Error occured' + err);
               error.http_error(req, res, { code: 500 });
            })
        } else {
            error.http_error(req, res, { code: 404 })
        }
    }
};