import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class index extends Component {

  render() {
    return (
      <div className="flex-center">
        <div className="login-wrapper">
          <h1>Login</h1>
          <input 
            type="text" 
            id="username" 
            placeholder="username"/>
          <input 
            type="password" 
            id="password"
            placeholder="password"/>
          <button className="btn btn-primary">
            Login
          </button>
          <p>Not a member yet? <Link to="/signup">Sign Up Here</Link></p>
        </div>
      </div>
    )
  }
}
