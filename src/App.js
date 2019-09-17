import React, { Component } from 'react';
import './App.css';
import PlayersList from './PlayersList/PlayersList';
import AddPlayer from './AddPlayer/AddPlayer';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [
       {
         name: 'Kunegunda',
         score: 5,
       },
       {
         name: 'Antoś',
         score: 0,
       }
     ]
   }
 }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

onPlayerRemove = (playerIndex) => {
  const playersLeft = this.state.players.filter((player, index) => index !== playerIndex)

  this.setState({ players: playersLeft })
}

onPlayerAdd = (playerName) => {
  const newPlayer = {
    name: playerName,
    score: 0,
  }
  console.log(newPlayer)
  this.setState({
    players: [...this.state.players, newPlayer]
  })
}

 render() {
   return (
     <div className="App">
       <AddPlayer onPlayerAdd={this.onPlayerAdd} />
       <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
     </div>
   );
 }
}

export default App;