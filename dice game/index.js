// Generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

    const player1= rollDice();
    const player2= rollDice();
    document.querySelector('.img1').src=`images/dice${player1}.png`;
    document.querySelector('.img2').src=`images/dice${player2}.png`;
    if(player1>player2){
        console.log("player 1 wins");
        document.querySelector('h1').innerHTML="Player 1 wins";
    }
        
    else if(player1<player2){
        console.log("player 2 wins");
        document.querySelector('h1').innerHTML="Player 2 wins";
    }
    else{
        console.log("draw");
        document.querySelector('h1').innerHTML="Draw";
    }
        
   
