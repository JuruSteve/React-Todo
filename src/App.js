import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todosList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: todosList,
      newTask: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };
  submitTasks = e => {
    e.preventDefault();
    const newTodo = {
      completed: false,
      id: 1528817084456,
      task: this.state.newTask
    };
    console.log(newTodo);
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    });
  };
  render() {
    return (
      <div className="app">
        <h1>ToDo App</h1>
        <TodoForm onChange={this.handleChange} submitTasks={this.submitTasks} />
        <TodoList todos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
