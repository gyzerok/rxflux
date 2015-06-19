/* @flow */

import React, { Component } from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList';
import TodoStore from '../stores/todo';
import { addTodo, removeTodo } from '../actions/todo';
import { Enhance, StoreMixin } from '../utils';

class App extends Component {
  render() {
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

export default Enhance(App, StoreMixin(TodoStore));
