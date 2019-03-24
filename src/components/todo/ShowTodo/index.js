import React, { Component } from 'react';
import TodoItem from './TodoItem';
import moment from 'moment';

export default class index extends Component { 
  render() {
    const { data } = this.props;
    const dataList = data.map(item => {
      return(
        <TodoItem 
          key={item._id} 
          id={item._id} 
          title={item.title}
          desc={item.description} 
          date={moment(item.date).format("dddd, DD MMMM YYYY")} 
          removeTodo={this.props.removeTodo}
          wantToEdit={this.props.wantToEdit}
          isDone={item.isDone}/>
      )
    })

    return (
      <ul className="todo-list">
        {dataList}
      </ul>
    )
  }
}
