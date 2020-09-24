const { TestScheduler } = require('jest')

const Airport = require('./Airport')

describe('Plane', function() {
    test('The Airport has planes', function () {
        const PlaneName = new PlaneName({name: 'GeoffreyPlane'})
        expect(PlaneName.name).toEqual("GeoffreyPlane")
    })
})