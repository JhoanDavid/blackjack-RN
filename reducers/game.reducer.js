

const initialState = {
    playerHand: [],
    dealerHand: [],
    gameover: false,
    totalBet: 0,
    amount: 0,
    cardCount: 0,
    gameMessage: '',
    isFeching: false,
    isError: false
}

const user = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default user