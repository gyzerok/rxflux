/* @flow */

import { onAction } from '../dispatcher';
import { store } from '../utils';
import { List } from 'immutable';

export default store(List([]),
  onAction('todo:add'), add,
  onAction('todo:remove'), remove
);

function add(prev: List, text: string): List {
  return prev.push({
    id: +new Date(),
    text: text
  });
}

function remove(prev: List, id: number): List {
  return prev.filter(v => v.id !== id);
}
