/* @flow */

import { Observable, Subject, ReplaySubject } from 'rx';
import React, { Component } from 'react';

/**
 * Creates store stream with patter match like updates
 */
export function store(initial, ...patterns): Observable {
  const streams = patterns.filter((_, i) => i % 2 === 0);
  const callbacks = patterns.filter((_, i) => i % 2 !== 0);
  const pairs = streams.map((_, i) =>
    [streams[i], callbacks[i]]
  );
  let store = Observable.concat(
    Observable.return(initial),
    Observable.when.apply(this, pairs.map(p =>
      p[0].thenDo(data => prev => p[1](prev, data))
    )).scan(initial, (prev, f) => f(prev))
  ).multicast(new ReplaySubject(1));
  store.connect();
  return store;
}

/**
 * Creates stream that works as Flux dispatcher
 */
export function dispatcher(): Object {
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

/**
 * Function for apply mixins
 */
export function Enhance(ComposedComponent: Component, mixins: Array<Component>): Component {
  return mixins.reduce((ComposedComponent, Mixin) => {
    return class extends Mixin {
      render() {
        return <ComposedComponent {...this.props} {...this.state} />;
      }
    }
  }, ComposedComponent);
}

/**
 * Mixin for store subscription
 */
export function StoreMixin(store: Observable): Component {
  return class extends Component {
    componentWillMount(): void {
      this._sub = store.subscribe(data => this.setState({ data }));
    }

    componentWillUnmount(): void {
      this._sub.dispose();
    }
  }
}
