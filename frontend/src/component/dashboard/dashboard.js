import React from 'react';
import Game from '../game/game';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <h2>Only visible if logged in.</h2>
        <div className='doodad'>X</div>
        <div className='doodad'>X</div>
        <div className='doodad'>X</div>
        <div className='doodad'>X</div>
        <div className='doodad'>X</div>
        <div className='doodad'>X</div>
        <Game />

      </div>
    );
  }
}

export default Dashboard;
