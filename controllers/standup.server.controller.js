const Standup = require('../models/standup.server.model');

exports.create = (req, res) => {
    let entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    entry.save((err) => {
        if (err) {
            let errMsg = 'Sorry, there was an error saving the stand-up meeting note. ' + err;
            res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
        } else {
            console.log('Stand-up meeting note was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });
};

exports.list = (req, res) => {
    let query = Standup.find();
    query.sort({createdOn: 'desc'})
        .limit(12)
        .exec((err, results) => {
            if(err) throw err;
            res.render('index', {title: 'Standup - list', notes: results});
        });
};

exports.filterByMember = (req, res) => {
    let query = Standup.find();
    let filter = req.body.memberName;

    query.sort({createdOn: 'desc'});
    if (filter.length > 0) {
        query.where({memberName: filter});
    }
    query.exec((err, results) => {
        if(err) throw err;
        res.render('index', {title: 'Standup - list', notes: results});
    });
};

exports.getNote = function (req, res) {
    res.render('newnote', {title: 'Standup - New note'});
};