import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Bloomio Plant Minder</h1>
            </header>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/signup' component={Landing}/>
            <Route exact path='/login' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
