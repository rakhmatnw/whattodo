import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <div className="flex-center">
        <div className="signup-wrapper">
          <h1>Sign Up</h1>
          <input 
            type="text" 
            id="username" 
            placeholder="username"/>
          <input 
            type="email" 
            id="email" 
            placeholder="email@email.com"/>
          <input 
            type="password" 
            id="password"
            placeholder="password"/>
          <button className="btn btn-primary">
            Sign Up
          </button>
          <p>Already have an account? <Link to="/">Login Here</Link></p>
        </div>
      </div>
    )
  }
}
