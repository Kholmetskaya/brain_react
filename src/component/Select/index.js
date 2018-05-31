import React, {Component} from "react";
import "./index.css"

class Select  extends Component {
    constructor(props){
        super(props)
        this.state = {value: 'B'};
        this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
    this.setState({value: event.target.value});
  }


    render(){     
        return (
            <div>
            <select className = 'select' value={this.state.value} onChange={this.handleChange}>
              <option value="A">1</option>
              <option value="B">2</option>
              <option value="C">3</option>
            </select>
          </div>
        );
    }
}

export default Select