import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input type="text" placeholder="Add A Task" onChange={props.onChange} />
      <button onClick={() => props.submitTasks()}>Add Task</button>
      <button onClick={() => props.clearCompletedTasks()}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
