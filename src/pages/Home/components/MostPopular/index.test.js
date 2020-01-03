import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MostPopular from './index';

describe('With Enzyme', () => {
  //   it('Should have ', () => {
  //     const app = shallow(<MostPopular data={{ data: handleData() }} />);
  //     expect(app.find('Card')).toEqual(9);
  //   });
});

describe('With Snapshot Testing', () => {
  it('Rendering MostPopular', () => {
    const component = renderer.create(<MostPopular />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
