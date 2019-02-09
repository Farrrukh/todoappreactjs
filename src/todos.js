import React from 'react';

 const Todos = (props) => {
     const {todos,deleteTodo} =props;
     const todosList = todos.length?(
         todos.map(item=>{
             return(
                 <div className="collection-item" key={item.id}>
                <span onClick={()=>{deleteTodo(item.id)}}> {item.content}</span>
                 </div>
             )
         })
     ):(
         <p className="center">You have no todos left,yay</p>
     )
    return(
       <div className="todos collection">
       {todosList}
       </div>
    )
}

export default Todos;