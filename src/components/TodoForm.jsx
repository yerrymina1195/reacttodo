
import { dataContext } from "./todo";
import { useContext } from "react";
import {useState} from "react";



export const TodoForm = () =>{
  const [todoTask, setTodoTask]= useContext(dataContext);
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
    return(
        <form onSubmit={ajout}   className=" new-item-form d-flex justify-content-center mb-5 g-1">
        <input
        value={newTask}
          onChange={changemet}
          type="text"
          id="item"
        />
      <button  className=" gtr">Add</button>
    </form>
    )
} 