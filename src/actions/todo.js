/* @flow */

import { dispatch } from '../dispatcher';

export function addTodo(text) {
  dispatch('todo:add', text);
}

export function removeTodo(id) {

}
