import React, {Component} from 'react';
import { Getjwt } from './components/helpers/Getjwt';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Auth extends Component {
  state ={
    username: undefined
  }

  componentDidMount(){
    const jwt = Getjwt();
    if(!jwt){
      alert('You must login first!');      
      this.props.history.push("/");
    }else{
      axios({
        method: 'GET',
        url: 'https://rar-todoapp.herokuapp.com/users',
        headers: {
          'Authorization': jwt
        }
      })
      .then(res => {
        this.setState({
          username: res.data.username
        })
      })
      .catch(err => {
        localStorage.removeItem('jwt');
        alert('You must login first!');
        this.props.history.push("/");
      })
    }
  }

  render(){
    if(this.state.username === undefined){
      return(
        <div><h1>Loading...</h1></div>
      )
    }
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Auth);