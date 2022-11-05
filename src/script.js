const game = (function () {
  const playerOne = 'X';
  const playerTwo = 'O';
  let playerOneWins = 0;
  let playerOneWinsDisplay = document.getElementById("score-one");
  let playerTwoWinsDisplay = document.getElementById("score-two");
  let playerTwoWins = 0;
  let boardGame = [
    '', '', '', 
    '', '', '', 
    '', '', ''
  ];
  const tiles = document.getElementsByClassName("tile");


  const announceWinner = player => {
    alert(`${player} Wins!!`);
  };
  const resetRound = () => {
    boardGame = [
    '', '', '', 
    '', '', '', 
    '', '', ''
    ];
  
    for (let i = 0; i < tiles.length; i++) { 
      tiles[i].innerHTML = null
    }
    //console.log(game.boardGame.length = 0)
    return game.boardGame.fill("", 0, 9);
  }
  const resetGame = () => {
    game.playerOneWins = 0;
    game.playerTwoWins = 0;
    game.playerOneWinsDisplay.textContent = 0;
    game.playerTwoWinsDisplay.textContent = 0;
    game.resetRound() 
  }

  return {
    playerOne,
    playerTwo,
    playerOneWins,
    playerTwoWins,
    playerOneWinsDisplay,
    playerTwoWinsDisplay,
    tiles,
    resetGame,
    resetRound,
    boardGame,
    announceWinner, 
  };
})();

//console.log(game.tiles)


const tiles = document.getElementsByClassName('tile');

function playerOne() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].onclick = () => {
      const span = document.createElement('span');
      span.textContent = game.playerOne;
      if (!tiles[i].textContent) {
        game.boardGame[i] = game.playerOne;
        tiles[i].appendChild(span);
        //Horizontal win check
        if (
          (game.boardGame[0] === 'X' &&
          game.boardGame[1] === 'X' &&
          game.boardGame[2] === 'X') ||
          (game.boardGame[3] === 'X' &&
          game.boardGame[4] === 'X' &&
          game.boardGame[5] === 'X') ||
          (game.boardGame[6] === 'X' &&
          game.boardGame[7] === 'X' &&
          game.boardGame[8] === 'X') ||
          (game.boardGame[0] === 'X' &&
          game.boardGame[3] === 'X' &&
          game.boardGame[6] === 'X') ||
          (game.boardGame[1] === 'X' &&
          game.boardGame[4] === 'X' &&
          game.boardGame[7] === 'X') ||
          (game.boardGame[2] === 'X' &&
          game.boardGame[5] === 'X' &&
          game.boardGame[8] === 'X') ||
          (game.boardGame[0] === 'X' &&
          game.boardGame[4] === 'X' &&
          game.boardGame[8] === 'X') ||
          (game.boardGame[2] === 'X' &&
          game.boardGame[4] === 'X' &&
          game.boardGame[6] === 'X')
          ) {
            game.announceWinner('Player 1');
            game.playerOneWinsDisplay.textContent = game.playerOneWins+= 1;
            setTimeout(game.resetRound, 2000)
            setTimeout(playerOne, 3000) 
          }  
        }
        else {
          //This stops it from placing X or O on existing X and O.
          return;
        }

      playerTwo();
    };
  }
}

function playerTwo() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].onclick = () => {
      const span = document.createElement('span');
      span.textContent = game.playerTwo;
      if (!tiles[i].textContent) {
        game.boardGame[i] = 'O';
        tiles[i].appendChild(span);
        if (
          (game.boardGame[0] === "O" &&
          game.boardGame[1] === "O" &&
          game.boardGame[2] === "O") ||
          (game.boardGame[3] === "O" &&
          game.boardGame[4] === "O" &&
          game.boardGame[5] === "O") ||
          (game.boardGame[6] === "O" &&
          game.boardGame[7] === "O" &&
          game.boardGame[8] === "O") ||
          (game.boardGame[0] === "O" &&
          game.boardGame[3] === "O" &&
          game.boardGame[6] === "O") ||
          (game.boardGame[1] === "O" &&
          game.boardGame[4] === "O" &&
          game.boardGame[7] === "O") ||
          (game.boardGame[2] === "O" &&
          game.boardGame[5] === "O" &&
          game.boardGame[8] === "O") ||
          (game.boardGame[0] === "O" &&
          game.boardGame[4] === "O" &&
          game.boardGame[8] === "O") ||
          (game.boardGame[2] === "O" &&
          game.boardGame[4] === "O" &&
          game.boardGame[6] === "O")
          ) {
            game.announceWinner('Player 2');
            game.playerTwoWinsDisplay.textContent = game.playerTwoWins+= 1;
            setTimeout(game.resetRound, 2000)
            setTimeout(playerOne, 3000) 
          }  
        }
        else {
          //This stops it from placing X or O on existing X and O.
          return;
        }

      playerOne();
    };
  }
}
