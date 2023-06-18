
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Display } from './components/todo';
import { Todocontain } from "./components/Todocontain";
import {TodoForm} from './components/TodoForm'


function App() {



  return (
    <div className="App">
      <h1 className='bg-primary text-white'>TODO AVEC REACT</h1>
       <Display>
        <TodoForm/>
        <Todocontain/>
       </Display>
    </div>

  );
}

export default App;
