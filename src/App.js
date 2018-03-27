import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Todos from './containers/TodosContainer';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          { MyRoutes}
      </div>
    );
  }
}

export default App;
