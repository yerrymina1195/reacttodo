import { useState} from "react";
import Conteiner from "./Conteiner";
import {TodoForm} from './TodoForm'
import { EditForm } from "./EditForm";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Display = ()=>{
    
const [todoTask, setTodoTask]= useState([]);
const [newTask, setNewTask]= useState("");


const changemet= (event)=>{
 
  setNewTask(event.target.value)
}
const ajout=(e)=>{
  e.preventDefault()
  // const newData=[...todoTask,newTask];
  if (newTask === "") return
    

  const task ={
    id: todoTask.length === 0 ? 1: todoTask[todoTask.length - 1].id + 1,
    taskName: newTask,
    completed:false,
    isEditing: false
  }
setTodoTask([...todoTask,task]);
setNewTask("")

}
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

const editTask = (task, id) => {
  
  const todoEditingFinal=    todoTask.map((todo) =>
  todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
)
  setTodoTask(todoEditingFinal);
};

return(
  <>
    <TodoForm something={ajout} onChange={changemet} value={newTask} />
   
     {todoTask.map(({taskName ,isEditing ,id,completed})=>
        isEditing ? (
          <EditForm something={editTask} id={id} taskName={taskName} />
        ) : (
          <Conteiner taskDisplay={taskName} deleteTask={deleteTask} completedTask={completedTask} completed={completed} editTodo={editTodo} id={id}/>
        )
      )}

  </>

)
}