import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import App from '../pages/index';
import makeStore from '../redux';

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(
      <Provider store={makeStore()}>
        <App />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
