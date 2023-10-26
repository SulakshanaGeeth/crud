var mongoose = require('mongoose');
var PersonSchema = require('./model');

PersonSchema.statics = {
    create : function(data, cb) {
        var model = new this(data);
        model.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var PersonSchema = mongoose.model('Models', PersonSchema);
module.exports = PersonSchema;