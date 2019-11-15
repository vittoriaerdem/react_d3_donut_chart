import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import DonutChart from './components/donut-chart';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>React & D3 Charts</h1>
          </header>
          <nav className="App-nav">
          </nav>
          <Route exact path="/" component={DonutChart} />
        
        </div>
      </Router>
    );
  }
}

export default App;
