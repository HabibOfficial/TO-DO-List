import React, {useState , useEffect} from 'react';
import './App.css';
import FetchAPI from './Components/APIData';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    getLocalTodos()
  } , [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  } , [todos ,status])

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos" , JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <Form setEditTodo={setEditTodo} editTodo={editTodo} setStatus={setStatus} inputText={inputText} todos={todos}  setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setEditTodo={setEditTodo} filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;