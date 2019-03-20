import React, { Component } from 'react';
import {FaEdit, FaTimes} from 'react-icons/fa';

export default class TodoItem extends Component {
  state = {
    isChecked: false
  }

  handleCheckboxClick = e => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
    const {id, title, desc, date, removeTodo} = this.props;

    return (
      <li 
        className={`todo-list__item ${this.state.isChecked ? 'disabled' : ''}`} >
        <label 
          className="checkbox-wrapper" 
          htmlFor={`item-${id}`}
          >

          <input 
            className="checkbox__input" 
            type="checkbox" 
            id={`item-${id}`}
            onChange={this.handleCheckboxClick}
            />

          <span className={`checkbox__content ${this.state.isChecked ? 'disabled' : ''}`}>

            <span className="checkbox__content__title">
              {title}
            </span>

            <br/>

            <span className="checkbox__content__desc">
              {desc}
            </span>

            <br/>

            <span className="checkbox__content__date">
              {date}
            </span>

          </span>
        </label>

        <div className="btn-group todo-list__btn">
          <button 
            className="btn btn-success" 
            disabled={this.state.isChecked ? true : false}
            onClick={() => this.props.wantToEdit(id, title, desc, date)}> 
            <FaEdit/> 
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => removeTodo(id)}> 
            <FaTimes/> 
          </button>
        </div>
      </li>
    )
  }
}
