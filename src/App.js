import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

import {addTodo, removeTodo, updateTodo} from './todolist';
import { TodoInput } from './Components/TodoInput';
import { TodoList } from './Components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
    }
  }

  addToList = (name, isCompleted, dueDate) => {
    console.log(this.state)
    const newTodos = addTodo(this.state.todos, name, isCompleted, dueDate);
    this.setState({
        todos: newTodos,
    })
  }

  removeFromList = (index) => {
    const newTodos = removeTodo(this.state.todos, index);
    this.setState({
        todos: newTodos,
    })
  }

  render() {
    console.log('todos', this.state.todos)
    const Input = <Row>
        <TodoInput onTodoEntered={this.addToList} />
    </Row>

    let Todos = null;
    if (this.state.todos.length > 0) {
        Todos = <Fragment>
            <Row>
                <h1>Todos</h1>
            </Row>
            <Row>
                <TodoList
                    todos={this.state.todos}
                    onRemoveTodo={this.removeFromList} />
            </Row>
        </Fragment>
    }

    return <Container>
        <br />
        {Input}
        <br />
        {Todos}
    </Container>;
  }
}

export default App;






