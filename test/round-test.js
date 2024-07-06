const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data')
const sampleData = data.prototypeData

const {createRound, takeTurn } = require('../src/round')
const { createDeck } = require('../src/deck');

const card1 = sampleData[0]
const card2 = sampleData[1]
const card3 = sampleData[2]
const deck = createDeck([card1, card2, card3])

const controlRound = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
}

let testRound = createRound(deck)

describe('rounds', () => {
    it('should create a round object', () => {
        expect(testRound).to.be.a('object')
    })

    it('should contain a deck, current card, current turn, and a list of incorrectly guessed questions', () => {
        expect(testRound).to.deep.equal(controlRound)
    })

    it('should contain an empty deck array if no deck is passed', () => {
        let emptyDeckRound = createRound()

        expect(emptyDeckRound.deck).to.be.a('array')
        expect(emptyDeckRound.deck).to.deep.equal([])
    })

    it('should start at turn 0', () => {
        expect(testRound.turns).to.equal(0)
    })

})
    
describe('turns', () => {
    it('should evaluate guesses and store incorrectly guessed cards in the round object', () => {
        let round = createRound(deck)

        takeTurn('object', round)
        takeTurn('object', round)

        expect(round.incorrectGuesses).to.deep.equal([2])
        expect(round.currentCard.correctAnswer).to.equal('mutator method')
    })

    it('should store the ids of incorrectly guessed questions in a list', () => {
        let round = createRound(deck)

        takeTurn('not an object', round)

        expect(round.incorrectGuesses).to.deep.equal([1])
    })
    
    it('should update the number of turns taken', () => {
        let round = createRound(deck)
        
        takeTurn(`guess`, round)
        takeTurn(`guess`, round)        

        expect(round.turns).to.equal(2)
    })
    
    it('should move to the next card after a turn is taken', () => {
        let round = createRound(deck)

        takeTurn(`guess`, round)
        takeTurn(`guess`, round)

        expect(round.currentCard).to.deep.equal(card3)
    })
})

// describe('turns')