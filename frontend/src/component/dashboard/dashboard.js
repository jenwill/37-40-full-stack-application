import React from 'react';
import Game from '../game/game';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <h2>You are logged in.</h2>
        <Game />
      </div>
    );
  }
}

export default Dashboard;
