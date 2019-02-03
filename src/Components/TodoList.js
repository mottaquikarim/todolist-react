import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

const TodoList = props => {
    return <ListGroup>
        {props.todos.map((todo, index) => {
            return <ListGroupItem key={index}>
                {todo.name}
                {"   "}
                <Badge
                    pill
                    style={{'cursor': 'pointer'}}
                    onClick={() => props.onRemoveTodo(index)}>
                    X 
                </Badge>
            </ListGroupItem>
        })}
    </ListGroup>
}

export { TodoList }
