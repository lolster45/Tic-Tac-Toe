

setTimeout(() => {
  console.log("time out activated...")
  document.getElementById('loading-page').style.visibility = 'hidden';
  document.getElementById('loading-page').style.height = '0vh';
  document.getElementById('loading-page').style.width = '0vw';
  document.getElementById('loading-page').style.opacity = '0';


  document.getElementById('main-content').style.opacity = '1';
  document.getElementById('main-content').style.visibility = 'visible';
  document.getElementById('main-content').style.transform = 'translateY(0px)';
}, 3000); // 5 seconds timeout



const game = (function () {
  const playerOne = 'X';
  const playerTwo = 'O';
  let playerOneWins = 0;
  let playerTwoWins = 0;
  let playerOneWinsDisplay = document.getElementById("one");
  let playerTwoWinsDisplay = document.getElementById("two");

  const playerOneScoreBg = document.getElementById('playerOneScore');
  const playerTwoScoreBg = document.getElementById('playerTwoScore');


  let boardGame = [
    '', '', '', 
    '', '', '', 
    '', '', ''
  ];
  const tiles = document.getElementsByClassName("tile");

  function IncreaseWinnerPoints(winnerDisplay, JSWins) {
    winnerDisplay.textContent = JSWins+=1;
  }

  const announceWinner = player => {
    alert(`${player} Wins!!`);
  };
  const resetRound = (winner) => {
    if(winner === 'player1') {
      IncreaseWinnerPoints(playerOneWinsDisplay, playerOneWins);
    }
    else if (winner === 'player2') {
      IncreaseWinnerPoints(playerTwoWinsDisplay, playerTwoWins);
    }

    //Resets the JS board for the game...
    boardGame = [
      '', '', '', 
      '', '', '', 
      '', '', ''
    ];
  
    //Cleasrs away the old X's and O's on the HTML...
    for (let i = 0; i < tiles.length; i++) { 
      tiles[i].innerHTML = null
    }

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
    playerOneScoreBg,
    playerTwoScoreBg,
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
  console.log('player one turn');

  game.playerTwoScoreBg.style.backgroundColor = '#00F0FF'
  game.playerOneScoreBg.style.backgroundColor = '#ffffff'


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
            // game.playerOneWinsDisplay.textContent = game.playerOneWins+= 1;
            setTimeout(() => {
              game.resetRound('player1')
            }, 2000)
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
  console.log('player two turn');

  game.playerOneScoreBg.style.backgroundColor = '#00F0FF'
  game.playerTwoScoreBg.style.backgroundColor = '#ffffff'
  
  

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
            // game.playerTwoWinsDisplay.textContent = game.playerTwoWins+= 1;
            setTimeout(() => {
              game.resetRound('player2')
            }, 2000);
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
