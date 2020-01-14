import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Home from './index';
import makeStore from '../../redux';

// describe('With Enzyme', () => {
//   it('App shows "Hello world!"', () => {
//     const app = shallow(<App />);

//     expect(app.find('h1').text()).toEqual('Hello World!');
//   });
// });

describe('With Snapshot Testing', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it('Rendering Home Page', () => {
    const component = renderer.create(
      <Provider store={makeStore()}>
        <Home />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
