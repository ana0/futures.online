import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Ten from './Ten';
import Home from './Home';
import Fortyone from './Fortyone';
import './../index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Fortyone} />
          <Route path="/profile" component={Ten} />
          <Route path="/ten" component={Ten} />
          <Route path="/fortyone" component={Fortyone} />
          <Route path="/form" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;