/* @flow */

import React, { Component, Element } from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList';
import TodoStore from '../stores/todo';
import { addTodo, removeTodo } from '../actions/todo';
import { Enhance, StoreMixin } from '../utils';

class App extends Component {
  shouldComponentUpdate(nextProps): boolean {
    return this.props.data !== nextProps.data;
  }

  render(): Element {
    return (
      <div>
        <TextInput
          value=""
          handleSave={addTodo} />
        <TodoList
          todos={this.props.data}
          handleRemove={removeTodo}/>
      </div>
    );
  }
}

export default Enhance(App, [StoreMixin(TodoStore)]);
