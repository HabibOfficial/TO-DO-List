import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";

const  FetchAPI = function() {

  const [Todos, setTodos] = useState([]);

  useEffect(()=> {
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      {setTodos(res.data)}
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos" , JSON.stringify(Todos))
  } , [Todos])


  useEffect(() => {
    JSON.parse(localStorage.getItem('Todos'))
  } , [])

  return (
    <div>
      {Todos.length > 0 ? (
        <ul>
          {Todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>) : ""
      }
    </div>
  );
}

export default FetchAPI;