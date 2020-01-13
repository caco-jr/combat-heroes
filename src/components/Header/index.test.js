import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './index';

describe('With Enzyme', () => {
  it('Header shows "Combat Heroes"', () => {
    const app = shallow(<Header />);

    expect(app.find('header').text()).toEqual('Combat Heroes');
  });
});

describe('With Snapshot Testing', () => {
  it('Header shows "Combat Heroes"', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
