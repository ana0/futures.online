import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Ten from './Ten';
import Fortyone from './Fortyone';
import './../index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true,
    };
  }

  handleDisableLogin() {
    this.setState({ displayLogin: false })
  }

  render() {
    return (
      <div className="main" id="home">
      {this.state.displayLogin ?
       <Login handleDisableLogin={this.handleDisableLogin.bind(this)} /> :
       null
      }
    </div>
    )
  }
}

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
          <Route exact path="/" component={Home} />
          <Route path="/ten" component={Ten} />
          <Route path="/fortyone" component={Fortyone} />
        </Switch>
      </div>
    )
  }
}

export default App;