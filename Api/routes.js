var Persons = require('./controller');

module.exports = function(router) {
    router.post('/create', Persons.createPerson);
    router.get('/get', Persons.getPersons);
    router.get('/get/:name', Persons.getPerson);
    router.put('/update/:id', Persons.updatePerson);
    router.delete('/remove/:id', Persons.removePerson);
}