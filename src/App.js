import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import TodoList from "./TodoList";

  
ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    document.querySelector("#outer-container")
);