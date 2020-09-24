const { TestScheduler } = require("jest")

const Passenger = require('./Passenger')

describe('Passenger', function() {
    test('has a name', function () {
        const person = new Passenger({name: 'Ben'})
        expect(person.name).toEqual("Ben")
    })

    test('has bags', () => {
        const person = new Passenger ({name: John})
        person.bags.push()
        const handluggage = new Bag(8)
        const hullluggage = new Bag(25)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        console.log(person)
        expect(person.bags.length).toBe(2)
    })

    test('we can read the weight of a bag', () => {
        const james = new Passenger({name: 'James'})
        const rucksac = new Bag(6)
        james.addBag(rucksac)
        expect(james.bags[0].weight).toBe(6)
    })
})