/* @flow */

import React, { Component, Element } from 'react'
import TodoItem from './TodoItem';

export default class App extends Component {
  render(): Element {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <TodoItem
            id={todo.id}
            text={todo.text}
            handleRemove={this.props.handleRemove}
          />
        )}
      </ul>
    );
  }
}
