import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </div>
        <Route render={({location}) =>(
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={950} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </div>
    );
  }
}

export default App;
