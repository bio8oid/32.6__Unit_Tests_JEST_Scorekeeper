import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './PlayersList/PlayersList';
import AddPlayer from './AddPlayer/AddPlayer';


it('should update player score', () => {

  const players = [
  {
    name: 'Kunegunda',
    score: 5,
  },
  {
    name: 'Antoś',
    score: 0,
  }
]
//const mockedOnScoreUpdate = jest.fn();

const appComponent = shallow(<App />);
appComponent.setState({ players });

const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
const playersAfterUpdate = appComponent.state().players;

    onScoreUpdate(0, 5);

    expect(playersAfterUpdate[0].score).toEqual(5);

    //console.log(playersAfterUpdate[0].score)

});


it('should add Player', () => {
  
  const appComponent = shallow(<App />);
  const players = appComponent.state('players');
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Kunegunda');

  expect(players.length).toEqual(2);
  expect(players[0].name).toEqual('Kunegunda');
  expect(players[0].score).toEqual(5);
});