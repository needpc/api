var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Get all question (general || domain)
    GetQuestion: function (req, res) {

        // Include relations
        includes = [
            { model: Models["computers_quests_resps"], attributes: { exclude: ['id', 'questid', 'created_at', 'updated_at'] } }
        ]

        // query activity
        // if (req.query.activity != null && validator.isLength(req.query.activity, { min: 0, max: 40 }))
        //     includes.push({ model: Models["computers_activities"], as: 'activity', attributes: { exclude: 'id' },  where: { name: req.query.activity } })
        // else
        //     includes.push({ model: Models["computers_activities"], as: 'activity', attributes: { exclude: 'id' } })

        // search in database
        Models["computers_quests"].findAll({
            include: includes,
            attributes: { 
                exclude: [
                    'created_at', 
                    'updated_at'
                ] 
            }
        }).then(function (question) {
            error.http_success(req, res, { code: 200, data: question });
        });
    }
};