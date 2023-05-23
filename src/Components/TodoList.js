import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos, setEditTodo}) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} setEditTodo={setEditTodo} title={todo.title} key={todo.id}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;