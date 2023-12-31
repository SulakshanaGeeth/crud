var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    }
}, );

module.exports = PersonSchema;