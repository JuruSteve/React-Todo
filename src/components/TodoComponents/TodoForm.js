import React, { Component } from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.submitTasks}>
      <input type="text" placeholder="Add A Task" onChange={props.onChange} />
      <button>Add Task</button>
      <button>Remove Task</button>
    </form>
  );
};

export default TodoForm;
