import React, { Component } from 'react';
import {FaEdit, FaTimes} from 'react-icons/fa';
import Axios from 'axios';
import moment from 'moment';
import {Getjwt} from './../../helpers/Getjwt';

export default class TodoItem extends Component {
  state = {
    isChecked: false
  }

  componentDidMount(){
    this.setState({
      isChecked: this.props.isDone
    })
  }

  handleCheckboxClick = (id, title, desc, date, isDone) => {
    console.log(isDone);
    this.setState({
      isChecked: !this.state.isChecked
    })
    // Axios({
    //   method: 'PUT',
    //   url: `https://rar-todoapp.herokuapp.com/todo/${id}`,
    //   headers:{
    //     'Authorization': Getjwt()
    //   },
    //   data: {
    //     title: {title},
    //     description: {desc},
    //     date: {date},
    //     isDone: {isDone}
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    //   this.setState({
    //     isChecked: !this.state.isChecked
    //   })
    // })
    // .catch(err => {
    //   console.log(err.response)
    // })
  }

  render() {
    const {id, title, desc, date, removeTodo, isDone} = this.props;

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
            onChange={() => this.handleCheckboxClick(id,title,desc,date,!isDone)}
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
