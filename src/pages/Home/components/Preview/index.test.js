import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';

import Preview from './index';
import makeStore from '../../../../redux';

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Provider store={makeStore()}>
        <Preview />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('Rendering Preview', () => {
    const component = renderer.create(
      <Provider store={makeStore()}>
        <Preview />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
