import React, {Component} from "react";
import "./index.css"

class Select  extends Component {
    constructor(props){
        super(props)
        this.state = { value: 'B' };
        // this.handleChange = this.handleChange.bind(this);
    }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }


    render(){    
        const  { option } = this.props;

        return (
            <div>
            <select className = 'select' value={this.state.value} onChange={this.handleChange}>
              {Object.keys(option).map((e, i) => <option key={i} value={option[e].value}>{option[e].label}</option>)}
            </select>
          </div>
        );
    }
}

export default Select