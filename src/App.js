import React, { Component } from 'react';

import {addTodo, removeTodo, updateTodo} from './todolist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
    }
  }

  addToList(name, isCompleted, dueDate) {
    const newTodos = addTodo(this.state.todos, name, isCompleted, dueDate);
    this.setState({
        todos: newTodos,
    })
  }

  removeFromList(index) {
    const newTodos = removeTodo(this.state.todos, index);
    this.setState({
        todos: newTodos,
    })
  }

  render() {
    console.log('todos', this.state.todos)
    return (
      <div className="App">
        <header className="App-header">
            <h1>Hello, Wrold!</h1>
        </header>
      </div>
    );
  }
}

export default App;
