import React,{ Component } from 'react';

class Input extends Component {
    render(){
        return(
            <form onSubmit = {this.props.getInputValue}>
                <input type="text" name="todoInput" placeholder="Write Your ToDo" />
                <button type='submit'>ADD</button>
            </form>
        );
    }
}



export default Input;