import React from 'react'

const Todos=({todos,deletetodo})=>{
    const todoList=todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                 <span onClick={()=>{deletetodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
        ):(
            <p className="center">BOO,You have no todo's left</p>
        )
    return(
        <div className="todos collection">
        {todoList}
        </div>
    )
}
export default Todos