var Persons = require('./dataAcess');

exports.createPerson = function (req, res, next) {
    var person = {
        name: req.body.name,
        description: req.body.description
    };

    Persons.create(person, function(err, person) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Profile created successfully"
        })
    })
}

exports.getPersons = function(req, res, next) {
    Persons.get({}, function(err, persons) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            persons: persons
        })
    })
}

exports.getPerson = function(req, res, next) {
    Persons.get({name: req.params.name}, function(err, persons) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            persons: persons
        })
    })
}

exports.updatePerson = function(req, res, next) {
    var person = {
        name: req.body.name,
        description: req.body.description
    }
    Persons.update({_id: req.params.id}, person, function(err, person) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Profile updated successfully"
        })
    })
}

exports.removePerson = function(req, res, next) {
    Persons.delete({_id: req.params.id}, function(err, person) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Profile deleted successfully"
        })
    })
}