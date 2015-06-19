/* @flow */

import { dispatch } from '../dispatcher';

export function addTodo(text): void {
  dispatch('todo:add', text);
}

export function removeTodo(id): void {

}
