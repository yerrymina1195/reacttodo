
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoProvider } from './components/todo';
import { Todocontain } from "./components/Todocontain";
import {TodoForm} from './components/TodoForm'


function App() {



  return (
    <div className="App">
      <h1 className='bg-primary text-white'>TODO AVEC REACT</h1>
       <TodoProvider>
        <TodoForm/>
        <Todocontain/>
       </TodoProvider>
    </div>

  );
}

export default App;
