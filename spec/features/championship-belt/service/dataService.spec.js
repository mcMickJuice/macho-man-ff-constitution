var test = require('tape');
var dataService = require('../../../../src/features/championship-belt/service/dataService');

//TODO these are temporary specs...should be updated to actually be unit tests
test('get results', (t) => {
    t.plan(2)
    
    dataService.getResults()
        .then(r => {
            t.ok(r.length === 13);
            t.ok(r[r.length - 1].week === 13)
        })
})

test('current holder', t => {
    t.plan(1);

    dataService.getCurrentHolder()
        .then(r => {
            t.ok(r.teamId === 10)
        })
})
