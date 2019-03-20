import React, { Component } from 'react';
import TodoItem from './TodoItem';

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
          date={item.date} 
          removeTodo={this.props.removeTodo}
          wantToEdit={this.props.wantToEdit}/>
      )
    })

    return (
      <ul className="todo-list">
        {dataList}
      </ul>
    )
  }
}
