const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data')
const sampleData = data.prototypeData

const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card');

// const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object") 
// const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
// const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
// const card1 = { "id": 1, "question": "What allows you to define a set of related information using key-value pairs?", "answers": ["object", "array", "function"], "correctAnswer": "object" } 
// const card2 = { "id": 2, "question": "What is a comma-separated list of related values?", "answers": ["array", "object", "function"], "correctAnswer": "array" } 
// const card3 = { "id": 3, "question": "What type of prototype method directly modifies the existing array?", "answers": ["mutator method", "accessor method", "iteration method"], "correctAnswer": "mutator method" }
const card1 = sampleData[0]
const card2 = sampleData[1]
const card3 = sampleData[2]

const deck = createDeck([card1, card2])

describe('deck', () => {
    it('should be a function', () => {
        expect(createDeck).to.be.a('function');
    });

    it('should create a deck of cards (array of card objects)', () => {
        expect(deck).to.be.a('array')
        expect(deck[0]).to.be.a('object')
        expect(deck[0].id).to.equal(1)
        expect(deck[0].correctAnswer).to.equal('object')
    });

    it('should return an empty array if no cards are passed as arguments', () => {
        let emptyDeck = createDeck()

        expect(emptyDeck).to.deep.equal([])
    })
});