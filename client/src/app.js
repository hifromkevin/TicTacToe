import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import Scorekeeper from './components/Scorekeeper.jsx';

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      currentPlay: 'X',
      gameBoard: [[null, null, null],[null, null, null],[null, null, null]],
      turnNumber: 0,
      winner: null,
      xWins: 0,
      oWins: 0,
      count: 0
    }

    this.newPlay = this.newPlay.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  checkForWinner(currentValue) {

    const winningRows = [
      //horizontal
      [this.state.gameBoard[0][0], this.state.gameBoard[0][1], this.state.gameBoard[0][2]],
      [this.state.gameBoard[1][0], this.state.gameBoard[1][1], this.state.gameBoard[1][2]],
      [this.state.gameBoard[2][0], this.state.gameBoard[2][1], this.state.gameBoard[2][2]],
      //vertical
      [this.state.gameBoard[0][0], this.state.gameBoard[1][0], this.state.gameBoard[2][0]],
      [this.state.gameBoard[0][1], this.state.gameBoard[1][1], this.state.gameBoard[2][1]],
      [this.state.gameBoard[0][2], this.state.gameBoard[1][2], this.state.gameBoard[2][2]],
      //diagonal
      [this.state.gameBoard[0][0], this.state.gameBoard[1][1], this.state.gameBoard[2][2]],
      [this.state.gameBoard[0][2], this.state.gameBoard[1][1], this.state.gameBoard[2][0]]
    ]

    for (var i = 0; i < winningRows.length; i++) {
      if (winningRows[i].every(this.checkForX)) {
        $('#winnerAnnouncement span').text('Player One (X) Wins!!!!');
        this.setState({ winner: 'X' });
        this.setState(previousState => { xWins: previousState.xWins++ });
      } else if (winningRows[i].every(this.checkForO)) {
        $('#winnerAnnouncement span').text('Player Two (O) Wins!!!!');
        this.setState({ winner: 'O' });
        this.setState(previousState => { oWins: previousState.oWins++ });
      }
    }
  }

  checkForX(char) {
    if (char === 'X') {
      return true;
    }
  }

  checkForO(char) {
    if (char === 'O') {
      return true;
    }
  }

  newPlay(e) {
    var row = $(e.target).data('row');
    var col = $(e.target).data('col');
    var getId = '#' + $(e.target).attr('id');
    if ($(e.target).text() === '' && this.state.winner === null) {

      this.state.turnNumber++;
      (this.state.currentPlay === 'X') ? 
      $(getId).text(this.state.currentPlay).addClass('ex') :
      $(getId).text(this.state.currentPlay).addClass('oh') 

      let newGameBoard = this.state.gameBoard.slice(); 
      newGameBoard[row][col] = this.state.currentPlay;
      this.setState({gameBoard: newGameBoard});

      if (this.state.turnNumber >= 5) { 
        this.checkForWinner(this.state.currentPlay);
      } 
      (this.state.currentPlay === 'X') ?
        this.setState({ currentPlay: 'O'}) :
        this.setState({ currentPlay: 'X'})
    }
  }

  resetGame() {
      var allIds = [
        '#one', '#two', '#three', 
        '#four', '#five', '#six', 
        '#seven', '#eight', '#nine', 
        '#winnerAnnouncement span'
      ];

      for (var i = 0; i < allIds.length; i++) {
        $(allIds[i]).text('');
      }

      this.setState({
        currentPlay: 'X',
        gameBoard: [[null, null, null],[null, null, null],[null, null, null]],
        turnNumber: 0,
        winner: null
      });
  }

  render() {
    return (
      <div>
      <h1 className="title">Welcome to TicTacToe!</h1>

        <div className="holder">
          <div className="row">
            <Square grid={[0,0]} squareId={'one'} newPlay={this.newPlay} />
            <Square grid={[0,1]} squareId={'two'} newPlay={this.newPlay} />
            <Square grid={[0,2]} squareId={'three'} newPlay={this.newPlay} />
          </div>
          <div className="row">
            <Square grid={[1,0]} squareId={'four'} newPlay={this.newPlay} />
            <Square grid={[1,1]} squareId={'five'} newPlay={this.newPlay} />
            <Square grid={[1,2]} squareId={'six'} newPlay={this.newPlay} />
          </div>
          <div className="row">
            <Square grid={[2,0]} squareId={'seven'} newPlay={this.newPlay} />
            <Square grid={[2,1]} squareId={'eight'} newPlay={this.newPlay} />
            <Square grid={[2,2]} squareId={'nine'} newPlay={this.newPlay} />
          </div>

          <div id="winnerAnnouncement"><span></span></div>

          <Scorekeeper playerNumber={1} score={this.state.xWins} />
          <Scorekeeper playerNumber={2} score={this.state.oWins} />

          <button className="resetButton" onClick={this.resetGame}>Reset</button>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('app'));

/* 
Player one starts - player one is always X
Player one clicks on a square - an X is filled in
turnNumber++

Player two's turn - O
Player two clicks on a square - an O is filled
NOTE: Player's move should be unique - cannot overwrite existing play

On 5th play (or later), start looking for a winner. 
  //if I winner is found, cannot keep playing


Advanced: Reset game
Keep score
Undo move

*/
