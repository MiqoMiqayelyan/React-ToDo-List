import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/Input';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: []   
    }
  }

  getInputValue = (e) => {
     if(e.target.todoInput.value !== '' && this.state.todo.id == undefined){
        var nextList = {
          text: e.target.todoInput.value ,
          id: Date.now()
        }
   

   
  } 
  this.setState((prevState) =>{
      return {todo: prevState.todo.concat(nextList)}
    }) 
    e.target.todoInput.value = '';
    e.preventDefault();  
  }

  deleteToDo = (key) => {
    let filterToDo = this.state.todo.filter((todo) => {
        return todo.id !== key 
    })

      this.setState({
        todo: filterToDo
      })
  }
  
  render() {
    console.log(this.state.todo);
    return (
      <div className="App">
        <Input getInputValue = {this.getInputValue}/>
        <ToDoList todo = {this.state.todo} id={this.state.id}
        deleteToDo = {this.deleteToDo} />
      </div>
    );
  }
}

export default App;
