import React, { Component } from 'react';
import Todos from './todos';
import AddForm from './AddForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state={todos:[{id:1,content:'Farrukh khan'},
                      {id:2,content:'Taha Khan'}]}
  }
  deleteTodo=(id)=>{
let todos = this.state.todos.filter(item=>{
return item.id !== id
})
this.setState({todos:todos})
  }
  addTodo =(todo)=>{
      let todos=[...this.state.todos,todo];
      this.setState({todos})
  }
  
  render() {
    return (
      <div className="App container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
