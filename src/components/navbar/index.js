import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class index extends Component {

  handleClick  = e => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    alert('You are logged out!');
    this.props.history.push("/");
  }

  render() {
    return(
      <nav className="navbar">
        <div className="container row space-between">
          <NavLink to="/" className="navbar__logo">whattodo</NavLink>
          <ul className="navbar__menu">
            <li className="navbar__menu__item">
              <button className="btn" onClick={this.handleClick}> Log Out </button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default index;
