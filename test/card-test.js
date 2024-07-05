const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data')
const sampleData = data.prototypeData

const { createCard } = require('../src/card');

const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
const firstSampleCard = sampleData[0]

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  it('should have formatting consistent with sample data', () => {
    expect(card1).to.deep.equal(firstSampleCard)
  })
});
