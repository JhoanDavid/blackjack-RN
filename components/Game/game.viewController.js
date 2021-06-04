import React from 'react'
import Game from './game.view'

class GameViewController extends React.Component { 
hit(){
    const {playerHand, cardCount} = this.state;

      playerHand.push(cardsDeck[cardCount]);

      let userPoints = this.checkTotalPlayerPoints(playerHand);
    
      //llamaria la accion
      this.setState({
        playerHand,
        cardCount : (cardCount + 1)
      });

      if(userPoints > 21){
        this.endgame();
      }
  }

  nextTurn(){
    const {playerHand, dealerHand, cardCount, totalBet, amount} = this.state;

    let _cardCount = cardCount;

    let dealerPoints = this.checkTotalPlayerPoints(dealerHand),
    playerPoints = this.checkTotalPlayerPoints(playerHand);

    //si los puntos son menores a 17 el debe de pedir una carta obligatoriamente como en la vida misma
    while(dealerPoints < 17){
      dealerHand.push(cardsDeck[_cardCount]);
      _cardCount++;
      dealerPoints = this.checkTotalPlayerPoints(dealerHand);
    }

    let betValue = totalBet * 2;

    //quien ganó

    //es blackjack?
    if(playerPoints == 21 && playerHand.length == 2){
      let newAmount = totalBet * 2;
      this.setState({
        amount : newAmount,
        totalBet : 0,
        gameover : true,
        gameMessage : "¡BlackJack!"
      });
    }

    //si el dealer pierde
    if((playerPoints < 22 && dealerPoints < playerPoints) || (dealerPoints > 21 && playerPoints < 22)){
      this.setState({
        amount : (amount + betValue),
        totalBet : 0,
        gameover : true,
        gameMessage : "Ganaste $ "+ betValue
      });
    } //si el jugador pierde
    else if(playerPoints > 21 && dealerPoints <= 21){
      this.setState({
        dealerHand,
        cardCount : _cardCount,
        gameover : true,
        totalBet : 0,
        gameMessage : "¡perdiste!"
      });
    }else if(playerPoints == dealerPoints){
      this.setState({
        totalBet : 0,
        amount : (amount + totalBet),
        gameover : true,
        gameMessage : "!empate!"
      });
    }else{
      this.setState({
        totalBet : 0,
        gameover : true,
        gameMessage : "quejesto"
      });
    }
  }

  checkTotalPlayerPoints(playerHand){
    let aceAdjuts = false,
    points = 0;

    playerHand.map((card,_index) => {
      if(card.name == 'A' && !aceAdjuts) {
        aceAdjuts = true;
        points = points + 10;
      }
      points = points + card.value;
    });

    if(aceAdjuts && points > 21){
      points = points - 10;
    }

    return points;
  }

  newGame(){
    let cardCount = 0;
    shuffle(cardsDeck);
    
    let playerHand = [],
    dealerHand = [];

    for(let i = 0; i < 2; i++){
      playerHand.push(cardsDeck[cardCount]);
      cardCount++;
      dealerHand.push(cardsDeck[cardCount]);
      cardCount++;
    }

    this.setState({
      playerHand,
      dealerHand,
      gameover:false,
      cardCount,
      gameMessage : ""
    });
  }

   shuffle(cardsDeck){
    for (let i = cardsDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsDeck[i], cardsDeck[j]] = [cardsDeck[j], cardsDeck[i]];
    }
    return cardsDeck;
}
 
    render() {
        return (
            <Game
                hit={this.hit}
                nextTurn={this.nextTurn}
                newGame={this.newGame}
            />
        )
    }
}

export default GameViewController