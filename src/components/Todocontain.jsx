import { EditForm } from "./EditForm";
import Conteiner from "./Conteiner";
import { todoContext } from "./todo";
import { useContext } from "react";

export const Todocontain = () =>{

  const {todoTask}= useContext(todoContext);

// console.log({props}); 
// const {todoTask,editTask,completedTask,deleteTask,editTodo} = props
 return (
  <div>
  {todoTask.map(({taskName ,isEditing ,id,completed})=>
isEditing ? (
<EditForm  id={id} taskName={taskName} />
) : (
<Conteiner taskDisplay={taskName} completed={completed} id={id}/>
)
)}
</div>
 )



}