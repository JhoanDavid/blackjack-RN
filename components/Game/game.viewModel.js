class GameViewModel {
    constructor(GameStore) {
        this.store = {
            playerHand: [],
            dealerHand: [],
            gameover: false,
            totalBet:0,
            amount :0,
            cardCount : 0,
            gameMessage
        }
    }
}

export default GameViewModel