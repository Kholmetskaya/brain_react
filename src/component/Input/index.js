import React, {Component} from "react";
import "./index.css"

class Input  extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",
            validatedStatus: true
        }
      
    }

    blur = () => {
        const { text } = this.state;
        let { validatedStatus} = true;
        const {regExp} = this.props;
        if(regExp){
            validatedStatus = regExp.test(text);
            this.setState({validatedStatus});
        }       
        this.endWrite && this.endWrite(text, validatedStatus);
    }

    helperInput = (e) => {
        let newState = {text:e.target.value}
        if(!e.target.value){
            newState.validatedStatus = true
        }
        this.setState(newState);  
    }

    render(){
        let {text, validatedStatus} = this.state
        const {errorMessage} = this.props;
      
        return (
            <div className = 'input'>
                <input  
                    type = 'text' 
                    onInput = {this.helperInput}
                    onBlur = {this.blur}/>
                { text && !validatedStatus ? <p>{ errorMessage }</p> : "" }               
            </div>
        );
    }
}

export default Input