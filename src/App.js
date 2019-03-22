import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

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
  componentDidMount = () => {
    if (localStorage.getItem("tasks") == null) {
      const tasks = [];
      tasks.push(this.state.toDos);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ toDos: savedTasks });
    }
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.toDos !== nextState.toDos) {
      localStorage.setItem("tasks", JSON.stringify(nextState.toDos));
    }
    return true;
  }

  submitTasks = () => {
    const newTodo = {
      completed: false,
      id: `157${Date.now()}`,
      task: this.state.newTask
    };
    if (this.state.newTask === "") {
      alert("Please Enter a Task");
    } else {
      this.setState({
        newTask: "",
        toDos: [...this.state.toDos, newTodo]
      });
    }
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
        <div className="header">
          <h1 className="Title">ToDo App</h1>
        </div>
        <div className="container">
          <TodoForm
            onChange={this.handleChange}
            submitTasks={this.submitTasks}
            clearCompletedTasks={this.clearCompletedTasks}
            inputField={this.state.newTask}
          />
          <TodoList completeTask={this.completeTask} todos={this.state.toDos} />
        </div>
      </div>
    );
  }
}

export default App;
