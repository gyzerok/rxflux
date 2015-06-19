/* @flow */

import { onAction } from '../dispatcher';
import { store } from '../utils';

export default store([],
  onAction('todo:add'), add
);

function add(prev: any, text: string): any {
  const id = Date.now();
  return prev.concat([{ id, text }]);
}
