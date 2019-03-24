import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class index extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    axios({
      method: 'POST',
      url: 'https://rar-todoapp.herokuapp.com/api/v1/users',
      data: {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(res => {
      alert(res.data.message);
      this.props.history.push("/")
    })
    .catch(err => {
      console.log(err.response);
    })
  }


  render() {
    return (
      <div className="flex-center">
        <div className="signup-wrapper">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              id="name" 
              placeholder="Full Name"
              onChange={this.handleChange}
              pattern="^(?!\s*$).+"
              required/>
            <input 
              type="text" 
              id="username" 
              placeholder="username"
              onChange={this.handleChange}
              pattern="^(?!\s*$).+"
              required/>
            <input 
              type="email" 
              id="email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="email@email.com"
              onChange={this.handleChange}
              pattern="^(?!\s*$).+"
              required/>
            <input 
              type="password" 
              id="password"
              placeholder="password"
              onChange={this.handleChange}
              pattern="^(?!\s*$).+"
              required/>
            <button 
              type="submit"
              className="btn btn-primary">
              Sign Up
            </button>
          </form>
          <p>Already have an account? <Link to="/">Login Here</Link></p>
        </div>
      </div>
    )
  }
}
