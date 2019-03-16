import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isLogin: false
  }

  render() {
    return(
      <nav className="navbar">
        <div className="container row space-between">
          <NavLink to="/" className="navbar__logo">whattodo</NavLink>
          {this.state.isLogin ?
            <ul className="navbar__menu">
              <li className="navbar__menu__item">
                <NavLink to="/logout"> Log Out </NavLink>
              </li>
            </ul> : '' 
          }
        </div>
      </nav>
    )
  }
}

export default Navbar;
