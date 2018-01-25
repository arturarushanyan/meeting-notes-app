const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    worktoday: String,
    impediment: String,
    createdOn: {
        type: Date,
        default: Date.Now()
    }
});