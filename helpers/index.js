export function shuffle(cardsDeck){
    for (let i = cardsDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsDeck[i], cardsDeck[j]] = [cardsDeck[j], cardsDeck[i]];
    }
    return cardsDeck;
}










/*
export function calculatePoints(playerHand){
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
}*/