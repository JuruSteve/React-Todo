import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.submitTasks}>
      <input type="text" placeholder="Add A Task" onChange={props.onChange} />
      <button>Add Task</button>
      <button>Clear Completed</button>
      <button />
    </form>
  );
};

export default TodoForm;
