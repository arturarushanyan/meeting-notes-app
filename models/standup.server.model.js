const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() !== 'none')
    },
    // Custom error text...
    'Select a valid member name.' ];

const requiredStringValidator = [
    function (val) {
        const testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty' ];

const standupSchema = new Schema({
    memberName: {
        type: String,
        required: true,
        validate: memberNameValidator },
    project: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    workYesterday: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    workToday: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    impediment: {
        type: String,
        required: true,
        default: 'none'},
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('standup', standupSchema);
