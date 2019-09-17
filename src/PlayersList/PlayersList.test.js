import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';


const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antoś',
        score: 0
    }
]




it('find players and number of', () => {

    const playerComponent = shallow(<PlayersList players={players} />);
    const expectedPlayersNumber = playerComponent.find(Player).length;
    
    shallow(<PlayersList players={[]} />);
});

it('onScoreUpdate call check', () => {

    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

    const player = playerComponent.find(Player).last();
    const onPlayerScoreChange = player.prop('onPlayerScoreChange');

    onPlayerScoreChange();
    
expect(mockedOnScoreUpdate).toBeCalledWith(1, undefined);

//console.log("This is log" + playerComponent.debug());
  });

