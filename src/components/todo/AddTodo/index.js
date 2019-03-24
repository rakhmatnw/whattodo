import React, { Component } from 'react'

export default class index extends Component {
  state = {
    title: '',
    desc: '',
    date: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: '',
      desc: '',
      date: ''
    })
  }


  render() {
    return (
      <div>
        <form className="form-group-inline">
          <input 
            type="text" 
            placeholder="Title"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            autoFocus={true}/>
          <input 
            type="text" 
            placeholder="Description"
            id="desc"
            onChange={this.handleChange}
            value={this.state.desc}/>
          <input 
            type="date"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}/>
          <button 
            className="btn btn-primary"
            onClick={this.handleSubmit}
            disabled={(this.state.desc.trim() === '' || this.state.date.trim() === '') ? true : false}>
            submit
          </button>
        </form>
      </div>
    )
  }
}
