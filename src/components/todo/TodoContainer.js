import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import axios from 'axios';
import {Getjwt} from './../helpers/Getjwt';
import moment from 'moment';

export default class TodoContainer extends Component {
  state = {
    todos: [],
    wantToEdit: false,
    tempTodo: {
      id: '',
      title: '',
      desc: '',
      date: ''
    },
    jwt: Getjwt()
  }

  setNewState = () => {
    axios({
      method: 'GET',
      url: 'https://rar-todoapp.herokuapp.com/todo',
      headers: {
        'Authorization': this.state.jwt
      }
    })
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  componentDidMount(){
    this.setNewState();
  }

  addTodo = todo => {
    axios({
      method: 'POST',
      url: 'https://rar-todoapp.herokuapp.com/todo',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.state.jwt
      },
      data: {
        'title': todo.title,
        'description': todo.desc,
        'date': todo.date
      }
    })
    .then(res => {
      alert(res.data.message);
      this.setNewState();
    })
    .catch(err => {
      alert(err.data.message);
    })
  }

  removeTodo = id => {
    axios({
      method: 'DELETE',
      url: `https://rar-todoapp.herokuapp.com/todo/${id}`,
      headers: {
        'Authorization': this.state.jwt
      }
    })
    .then(res => {
      alert(res.data.message);
      this.setNewState();
    })
    .catch(err => {
      alert(err.data.message);
    })
  }

  editTodo = todo => {
    axios({
      method: 'PUT',
      url: `https://rar-todoapp.herokuapp.com/todo/${todo.id}`,
      headers: {
        'Authorization': this.state.jwt
      },
      data: {
        title: todo.title,
        description: todo.desc,
        date: todo.date
      }
    })
    .then(res => {
      console.log(res.data.message);
      this.setNewState();
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  wantToEdit = (id, title, desc, date) => {
    console.log(moment(date).format("YYYY-MM-DD"))
    this.setState({
      wantToEdit: true,
      tempTodo: {
        id: id,
        title: title,
        desc: desc,
        date: moment(date).format("YYYY-MM-DD")
      }
    })
  }

  render() {
    return (
      <div>
        {
          !this.state.wantToEdit &&
          <AddTodo addTodo={this.addTodo} />
        }
        {
          this.state.wantToEdit &&
          <EditTodo editTodo={this.editTodo} tempTodo={this.state.tempTodo}/>
        }

        <h2 className="thin primary">Your To Do List</h2>
        <ShowTodo 
          data={this.state.todos}
          removeTodo={this.removeTodo}
          wantToEdit={this.wantToEdit}/>
      </div>
    )
  }
}
