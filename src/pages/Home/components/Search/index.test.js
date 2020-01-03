import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Search from './index';

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('With Snapshot Testing', () => {
  it('Rendering Search', () => {
    const component = renderer.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
