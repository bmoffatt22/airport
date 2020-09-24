const { TestScheduler } = require('jest')

const Plane = require('./Plane')

describe('Plane', function() {
    test('The plane has passengers', function () {
        const flight = new Plane({name: 'FH166'})
        expect(flight.name).toEqual("FH166")
    })
})