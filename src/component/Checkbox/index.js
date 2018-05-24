import React, {Component} from "react";
import "./index.css"

class Checkbox  extends Component  {
    constructor(props){
        super(props)
        this.state = {
            checked: true
        }
     
    }
    helperClick = () => {
        const checked = !this.state.checked;
        this.setState ({checked});
        this.props.change && this.props.change (checked);
    }

    render(){
        let { checked } = this.state;
        const { label } = this.props;

        return (<div className = "custom-checkbox">
                <span 
                onClick = {this.helperClick}
                className = {checked ? "active": ""}
                /> 
                <p>{ label }</p>
            </div>
        );
    }
}

export default Checkbox