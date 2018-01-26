const Standup = require('../models/standup.server.model');

exports.create = (req, res) => {
    let entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    entry.save();
    res.redirect(301, '/');
};

exports.getNote = function (req, res) {
    res.render('newnote', {title: 'Standup - New note'});
};