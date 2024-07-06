const createRound = (deck = []) => {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

const takeTurn = (guess, round) => {
    // accesses round object -
    // updates 'turn' count, evaluates guess and gives feedback (correct or incorrect), and stores id of incorrect answers (push to array)
    if (guess === round.currentCard.correctAnswer) {
        console.log(`correct!`)
    } else {
        console.log(`incorrect!`)
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns++;
    if (round.turns < round.deck.length) {
        round.currentCard = round.deck[round.turns]
    } else {
        console.log('deck is empty!')
    }
    return round
}

module.exports = {
    createRound,
    takeTurn,
}