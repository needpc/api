var error     = require('../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../models/users'));

module.exports = {

    Get: function(req, res)
    {
        error.http_success(req, res, { code: 201, message: "Task created" });
    },

    GetId: function(req, res)
    {
        error.http_success(req, res, { code: 201, message: "Task created" });
    },
    
    Post: function(req, res)
    {
        Models.Computer.MComputer.findOrCreate({
            include: [ 
                { model: Models.Computer.MComputer_os, as: 'os' },
                { model: Models.Computer.MComputer_network, as: 'networks' },
                { model: Models.Computer.MComputer_keyboard, as: 'keyboards' },
                { model: Models.Computer.MComputer_graphic, as: 'graphics' },
                { model: Models.Computer.MComputer_display, as: 'display' },
                { model: Models.Computer.MComputer_disk, as: 'disks' },
                { model: Models.Computer.MComputer_cpu, as: 'cpus' },
                { model: Models.Computer.MComputer_color, as: 'colors' },
                { model: Models.Computer.MComputer_chipset, as: 'chipsets' },
                { model: Models.Computer.MComputer_brand, as: 'brands' },
                { model: Models.Computer.MComputer_activity, as: 'activity' },
            ],
            where: { model: req.body.model },
            attributes: ['id'],
        })
        .then(function(computers, created){
            console.log(computers.values);
        })
        .error(function(err){
           console.log('Error occured' + err);
        })
    },

    PostId: function(req, res)
    {
         if (validator.isInt(req.params.id))
             error.http_success(req, res, { code: 200, message: "TEST GET API id: " + req.params.id });
         else
             error.http_error(req, res, { code: 400 });
    },

    PutId: function(req, res)
    {
        if (validator.isInt(req.params.id))
            error.http_success(req, res, { code: 200, message: "TEST GET API id: " + req.params.id });
        else
            error.http_error(req, res, { code: 400 });
    },

    DeleteId: function(req, res)
    {
        if (validator.isInt(req.params.id))
            error.http_success(req, res, { code: 200, message: "TEST GET API id: " + req.params.id });
        else
            error.http_error(req, res, { code: 400 });
    }
};