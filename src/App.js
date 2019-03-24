import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

import Todo from './components/todo/TodoContainer';
import Login from './components/login';
import Signup from './components/signup';

import Auth from './Auth';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route  {...rest} render={props => (
      <div className="DefaultLayout">
        <div className="container">
          <Component {...props} />
        </div>
      </div>
    )} />
  )
};

const ProtectedLayout = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
      <Auth>
        <div className="ProtectedLayout">
          <Navbar {...props}/>
          <div className="container">
            <Component {...props} />
          </div>
        </div>  
      </Auth>
    )} />
  )
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <DefaultLayout exact path="/" component={Login}/>
          <DefaultLayout path="/signup" component={Signup}/>

          <ProtectedLayout path="/todo" component={Todo}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
