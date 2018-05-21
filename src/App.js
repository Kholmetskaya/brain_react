import React, { Component } from 'react';
import './App.css';
// components
import Checkbox from "./component/Checkbox"

class App extends Component {
  constructor(props){
    super(props);

    this.id = setInterval(()=> {
      this.setState({
        currentDate: getDate()
      });
    },1000);
    this.state = {
      currentDate: getDate()
    }
  }
 sendForm(e){
    e.preventDefault();
    console.log(this);
    this.setState({
      currentDate: getDate()
    })
 }

componentWillUnmount(){
  alert("test")
  clearInterval(this.id);
}
  render() {


      return <div className="App">
      <form onSubmit={this.sendForm.bind(this)}>
          <div>{this.state.currentDate}</div>
          <span>Sign in</span>
          <input className = "" type = "email" placeholder = "email"/>
          <input className = "" type = "password" placeholder = "password"/>
          <input className = "" type = "password" placeholder = "confirm password"/>
          <Checkbox />
          <button>accept</button>
        </form>
      </div>;
 
  }
}

export default App;

function getDate(){
  let date = new Date().toISOString();
  date = date.replace("T", ' ');
  date = date.replace(/\..{1,}/, " ");
  return date
}