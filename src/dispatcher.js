import { Observable, Subject } from 'rx';

function create() {
  let dispatcher = new Subject();

  function dispatchAsync(id, source) {
    return function (data) {
      dispatcher.onNext({ id, data, source });
    }
  }

  function dispatch(id, data, source) {
    dispatcher.onNext({ id, data, source });
  }

  function onAction(filter) {
    return dispatcher
      .filter(({ id }) => id === filter)
      .map(({ data }) => data);
  }

  return { dispatch, dispatchAsync, onAction };
}

export default create();
