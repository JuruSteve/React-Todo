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
  componentDidMount = () => {
    console.log(localStorage);
    localStorage.setItem("tasks", JSON.stringify(this.state.toDos));
  };
  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  submitTasks = () => {
    const newTodo = {
      completed: false,
      id: `157${Date.now()}`,
      task: this.state.newTask
    };
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    });
  };

  completeTask = id => {
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(todo.completed);
        }
        return todo;
      })
    });
  };

  clearCompletedTasks = () => {
    this.setState({
      toDos: this.state.toDos.filter(todo => {
        return todo.completed === false;
      })
    });
  };
  render() {
    return (
      <div className="app">
        <h1>ToDo App</h1>
        <TodoForm
          onChange={this.handleChange}
          submitTasks={this.submitTasks}
          clearCompletedTasks={this.clearCompletedTasks}
        />
        <TodoList completeTask={this.completeTask} todos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
