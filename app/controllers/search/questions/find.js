var error     = require('../../../controllers/error');
var validator = require('validator');
var path = require('path');
var Models   = require(path.join(__dirname, '../../../models/index'));

var taleQuestionAnsewr = [];

// show only important informations
var setTable = function(itemid) {
    var tableAnsewOrder = [];
    var tableAnsewIndice = [];

    // write info in new array
    for (var i = 0; i < itemid.quests.length; i++) {
        tableAnsewOrder.push(itemid.quests[i].resp);
        tableAnsewIndice.push(itemid.quests[i].indice);
    }
    
    // Push all information
    taleQuestionAnsewr.push({
        "id": itemid.id,
        "activity": itemid.activity,
        "question": itemid.quest,
        "domain" : itemid.domain,
        "reponses" : tableAnsewOrder,
        "indice" : tableAnsewIndice
    });
};

module.exports = {

    // Get all question (general || domain)
    GetQuestion: function (req, res) {

        // Include relations
        includes = [
            { model: Models["ComputersQuestsResps"], as: 'quests', attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'quest_id'] } }
        ]

        // query activity
        if (req.query.activity != null && validator.isLength(req.query.activity, { min: 0, max: 40 }))
            includes.push({ model: Models["ComputersActivities"], as: 'activity', attributes: { exclude: 'id' },  where: { name: req.query.activity } })
        else
            includes.push({ model: Models["ComputersActivities"], as: 'activity', attributes: { exclude: 'id' } })

        // search in database
        Models["ComputersQuests"].findAll({
            include: includes,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }).then(function (question) {
            question.forEach(function(element) {
                setTable(element);
            });
            error.http_success(req, res, { code: 200, data: taleQuestionAnsewr });
            taleQuestionAnsewr = [];
        });
    }
};