import React from "react";
const Todo = props => {
  console.log(props);
  return <li>{props.taskItem.task.completed}</li>;
};

export default Todo;
