import React, { Component } from 'react';
import './App.css';
// components

import { connect } from 'react-redux';

import Checkbox from "./component/Checkbox"
import Input from "./component/Input"
import Select from "./component/Select"


class App extends Component {
  constructor(props){
    super(props);
    this.id = setInterval(()=> {
      
    }, 1000);
  }

  render() {
    console.log(this.props)
    const { time } = this.props;
    return <div className="App" onClick={()=> this.props.dispatch({
      type: "NEW_TIME", 
      newTime: new Date().toISOString()
    })}>
      <form onSubmit={e => e.preventDefault()} >
        <span>{time}</span>
        <Select option={{
          1: {value: 1, label:"A"}, 
          2: {value: 2,  label:"B"}, 
          3 : {value: 3,  label: "C"}
          }} />
      </form>
    </div>;
  }
}


const mapStateToProps = state => {
  const newName = state.test.name + "";
  return {
    time: state.time.currentTime,
    _key: newName
  }
};

export default connect(mapStateToProps)(App);

function getDate(){
  let date = new Date().toISOString();
  date = date.replace("T", ' ');
  date = date.replace(/\..{1,}/, " ");
  return date
}