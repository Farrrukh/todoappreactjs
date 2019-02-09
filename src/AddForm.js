import React, { Component } from 'react'

class AddForm extends Component{
    constructor(props){
        super(props)

        this.state={
content:''
        }
    }
    handleChange=(e)=>{
        this.setState({content:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
           <label>Add New Todos</label>
           <input type="text" onChange={this.handleChange}/>
            </form>
        </div>
    )
}
}
export default AddForm;