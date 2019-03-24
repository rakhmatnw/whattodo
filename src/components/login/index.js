import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Modal from './../modal';

export default class index extends Component {
  state = {
    username: "",
    password: "",
    error: false
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.username)
    axios({
      method: 'POST',
      url: 'https://rar-todoapp.herokuapp.com/api/v1/users/login',
      data: {
        username: this.state.username.trim(),
        password: this.state.password
      }
    })
    .then(res => {
      localStorage.setItem('jwt', res.data.token);
      this.props.history.push("/todo");
    })
    .catch(err => {
      console.log(err.response);
      localStorage.removeItem('jwt');
      alert(err.response.data.message);
    })
  }

  render() {
    return (
      <div className="flex-center">
        <div className="login-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              id="username" 
              placeholder="username"
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
              Login
            </button>
          </form>
          <p>Not a member yet? <Link to="/signup">Sign Up Here</Link></p>
        </div>
      </div>
    )
  }
}
