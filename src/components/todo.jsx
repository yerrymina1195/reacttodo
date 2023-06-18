import { useState , createContext} from "react";

// import Conteiner from "./Conteiner";
// import { EditForm } from "./EditForm";
import 'bootstrap/dist/css/bootstrap.min.css';


export const dataContext = createContext()

export const Display = (props)=>{
    
 const [todoTask, setTodoTask]= useState([]);
// const [newTask, setNewTask]= useState("");


// const changemet= (event)=>{
 
//   setNewTask(event.target.value)
// }
// const ajout=(e)=>{
//   e.preventDefault()
//   // const newData=[...todoTask,newTask];
//   if (newTask === "") return
    

//   const task ={
//     id: todoTask.length === 0 ? 1: todoTask[todoTask.length - 1].id + 1,
//     taskName: newTask,
//     completed:false,
//     isEditing: false
//   }
// setTodoTask([...todoTask,task]);
// setNewTask("")

// }
// const deleteTask=(taskname)=>{
//    const newTodoList = todoTask.filter(({id})=> id !== taskname);
//    setTodoTask(newTodoList)
// }
// const completedTask =(id)=>{
// const newTodolistWithCompletedTask= todoTask.map((task)=>{
//   if(task.id === id){
//     return { ...task, completed:true}
//   }else{
//     return task
//   }
// })
// setTodoTask(newTodolistWithCompletedTask)
// }
// const editTodo = (id) => {
//   const todoEditing=    todoTask.map((todo) =>
//   todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
// )
// setTodoTask(todoEditing);
// }

// const editTask = (task, id) => {
  
//   const todoEditingFinal=    todoTask.map((todo) =>
//   todo.id === id ? { ...todo, taskName: task, isEditing: !todo.isEditing } : todo
// )
//   setTodoTask(todoEditingFinal);
// };

return(
  <>
    {/* <InputGroup className="mt-3 w-50 mx-auto"   onChange={changemet}>
    <Form.Control
      placeholder="New Task"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" className='btn btn-success text-white' onClick={ajout} id="button-addon2">
      ajouter
    </Button>
  </InputGroup> */}
   

      {/* <form onSubmit={ajout}   className=" new-item-form d-flex justify-content-center g-1">
        <input
        value={newTask}
          onChange={changemet}
          type="text"
          id="item"
        />
      <button  className=" gtr">Add</button>
    </form> */}
    <dataContext.Provider value={[todoTask, setTodoTask]}>
      {props.children}
    </dataContext.Provider>
    {/* <TodoForm something={ajout} onChange={changemet} value={newTask} /> */}
    {/* <Todocontain todoTask={todoTask} editTask={editTask} deleteTask={deleteTask} completedTask={completedTask}  editTodo={editTodo} /> */}
   
     {/* {todoTask.map(({taskName ,isEditing ,id,completed})=>
        isEditing ? (
          <EditForm something={editTask} id={id} taskName={taskName} />
        ) : (
          <Conteiner taskDisplay={taskName} deleteTask={deleteTask} completedTask={completedTask} completed={completed} editTodo={editTodo} id={id}/>
        )
      )} */}
       {/* {todoTask.map(({taskName ,isEditing ,id,completed})=>{
      
     return  <Conteiner taskDisplay={taskName} deleteTask={deleteTask} completedTask={completedTask} completed={completed} id={id}/>
    })} */}
  </>

)
}