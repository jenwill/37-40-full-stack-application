import React from 'react';
import PlantForm from '../plant-form/plant-form';
import { create } from '../../action/plant';
import Plant from '../plant/plant';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <h2>Only visible if logged in.</h2>
        <PlantForm onComplete={ create }/>
      </div>
    );
  }
}

export default Dashboard;
