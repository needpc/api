var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

const Op = Models.Sequelize.Op;

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
        if (req.query.os != null) {
            conditions["os_id"] = []
            for (var i = 0; i < req.query.os.length; i++) {       
                conditions["os_id"].push(req.query.os[i]);
            }
        }

        // GPU Scoring
        if (req.query.gpu_score != null) {
            conditions["$gpu.score$"] = { 
                    $lte: (parseInt(req.query.gpu_score, 10)+1000), 
                    $gte: (parseInt(req.query.gpu_score, 10)-1000), 
            };
        }

        // CPU Scoring
        if (req.query.cpu_score != null) {
            conditions["$cpu.score$"] = { 
                    $lte: (parseInt(req.query.cpu_score, 10)+1000), 
                    $gte: (parseInt(req.query.cpu_score, 10)-1000), 
            };
        }
            
        // activity
        if (req.query.activity != null && req.query.activity != "") {
            conditions["activity_id"] = []
            for (var i = 0; i < req.query.activity.length; i++) {       
                conditions["activity_id"].push(req.query.activity[i]);
            }
        }
                   
        // Graphics
        if (req.query.gpu != null && req.query.gpu != "") {
            conditions["gpu_id"] = []
            for (var i = 0; i < req.query.gpu.length; i++) {       
                conditions["gpu_id"].push(req.query.gpu[i]);
            }
        }
            
        // Chipsets
        if (req.query.chipset != null && req.query.chipset != "") {
            conditions["chipset_id"] = []
            for (var i = 0; i < req.query.chipset.length; i++) {       
                conditions["chipset_id"].push(req.query.chipset[i]);
            }
        }

        // Push all relation, search no avalailble
        includes.push(
            { 
                model: Models["computers_os"], 
                as: "os", 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                }, 
                required: false 
            },
            { 
                model: Models["computers_cpus"], 
                as: "cpu", 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                }, 
                required: false 
            },
            { 
                model: Models["computers_gpus"], 
                as: "gpu", 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                }, 
                required: false 
            },
            { 
                model: Models["computers_chipsets"], 
                as: "chipset", 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                }, 
                required: false 
            },
            { 
                model: Models["computers_activities"], 
                as: "activity", 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                }, 
                required: false 
            }, 
            // { 
            //     model: Models['computers_disks'], 
            //     attributes: { 
            //         exclude: [
            //             'id'
            //         ] 
            //     },
            //     where: {
            //         $and: conditions,
            //     },
            //     required: false 
            // }
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
            { 
                model: Models["computers_os"], 
                as: 'os', 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                } 
            },
            { 
                model: Models["computers_cpus"], 
                as: 'cpu', 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                } 
            },
            { 
                model: Models["computers_gpus"], 
                as: 'gpu', 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                } 
            },
            { 
                model: Models["computers_chipsets"], 
                as: 'chipset', 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                } 
            },
            { 
                model: Models["computers_activities"], 
                as: 'activity', 
                attributes: { 
                    exclude: [
                        'id'
                    ] 
                } 
            },
            // { 
            //     model: Models['computers_prices'], 
            //     as: 'prices',
            //     attributes: { 
            //         exclude: [
            //             'id', 
            //             'computer_id', 
            //             'trader_id', 
            //             'updated_at'
            //         ] 
            //     }, 
            //     include: [
            //         {
            //             model: Models['computers_traders'],
            //             attributes: [
            //                 'name'
            //             ],
            //             required: true
            //         }
            //     ], 
            //     required: false 
            // },
            // { 
            //     model: Models['computers_disks'], 
            //     attributes: { 
            //         exclude: [
            //             'id'
            //         ] 
            //     },
            //     required: false 
            // },
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
                'keyboard_type',
                'keyboard_numpad',
                'keyboard_light',
                'screen_type',
                'screen_resolution',
                'screen_refresh_rate',
                'screen_size',
                'screen_format',
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