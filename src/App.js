import React, { Component } from 'react';
import './App.css';
// components
import Checkbox from "./component/Checkbox"
import Input from "./component/Input"
import Select from "./component/Select"

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

newMailValue = (val,status) => console.log(val,status)
  render() {
    const options = {
      errorMessage : "This email is not valid",
      regExp: /.{5,12}@.{3,10}\..{2,3}/,
      endWrite: this.newMailValue
    }

      return <div className="App">
      <form onSubmit={this.sendForm.bind(this)}>
          <div>{this.state.currentDate}</div>
          <span>Sign in</span>
          <Input {...options} />
          <input className = "" type = "password" placeholder = "password"/>
          <input className = "" type = "password" placeholder = "confirm password"/>
          <Checkbox label = 'text' change = {val => {
            console.log("current state", val)
          }}/>
          <Select />
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