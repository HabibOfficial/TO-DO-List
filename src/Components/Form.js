import React, {useEffect} from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, editTodo, setEditTodo}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const updateTodo = (title,completed,id) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title,completed,id} : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

  useEffect(() => {
      if (editTodo) {
        setInputText(editTodo.title)
      } else {
        setInputText("")
      } 
  } , [setInputText,editTodo])

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!editTodo){
      if (inputText) {
        let num = todos.length + 1
        setTodos([
          ...todos , {title: inputText , completed: false , id : num}
        ]);
        setInputText("");
      } else {
        alert("Add task to the input field as a to-do")
      }
    } else {
      updateTodo(inputText, editTodo.completed, editTodo.id)

    }  
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter to-do task here..."/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;