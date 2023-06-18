import React from 'react'
import { dataContext } from "./todo";
import { useContext } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
export default function Conteiner({taskDisplay,id, completed}) {
  const [todoTask, setTodoTask]= useContext(dataContext);



const deleteTask=(taskname)=>{
   const newTodoList = todoTask.filter(({id})=> id !== taskname);
   setTodoTask(newTodoList)
}

const completedTask =(id)=>{
  const newTodolistWithCompletedTask= todoTask.map((task)=>{
    if(task.id === id){
      return { ...task, completed:true}
    }else{
      return task
    }
  })
  setTodoTask(newTodolistWithCompletedTask)
  }

const editTodo = (id) => {
  const todoEditing=    todoTask.map((todo) =>
  todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
)
setTodoTask(todoEditing);
}

  return (
    
          
      <div className={completed ? "  bg-success fez my-3 d-flex justify-content-around" :"  bg-secondary my-3 d-flex flex-wrap justify-content-around"}>
        <h1 className=''>{taskDisplay}</h1>
      <div className='my-auto'>
        
      <button onClick={() => editTodo(id)}  className='btn btn-warning rounded-pill me-3 btn-sm'>edit</button>
      <button onClick={() => completedTask(id)}  className={completed ? 'btn btn-light disabled btn-sm me-3' : 'btn btn-success btn-sm me-3'}>complete</button>
      <button onClick={() => deleteTask(id)} className='btn btn-danger rounded-pill btn-sm'>delete</button>
      </div>
      </div>
   

    
  )
}
