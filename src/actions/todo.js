/* @flow */

import { dispatch } from '../dispatcher';

export function addTodo(text: string): void {
  dispatch('todo:add', text);
}

export function removeTodo(id: number): void {
  dispatch('todo:remove', id);
}
