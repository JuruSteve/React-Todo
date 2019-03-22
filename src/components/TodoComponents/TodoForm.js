import React from "react";
import "./Todo.css";
const TodoForm = props => {
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={props.inputField}
        placeholder="Add A Task"
        onChange={props.onChange}
      />
      <button className="add" onClick={() => props.submitTasks()}>
        Add Task
      </button>
      <button className="clear" onClick={() => props.clearCompletedTasks()}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
