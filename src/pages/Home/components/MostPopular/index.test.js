import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '../../../../components/Card/Default';

import MostPopular from './index';

const mockCharacterObject = {
  id: 39,
  name: 'Batman',
  image: {
    url: ''
  }
};

const mockCharacterList = Array(9).fill(mockCharacterObject);

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = shallow(<MostPopular data={mockCharacterList} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return the default empty array when there is no data to map through', () => {
    const wrapper = shallow(<MostPopular />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have cards of character', () => {
    const wrapper = shallow(<MostPopular data={mockCharacterList} />);

    expect(wrapper.find(Card)).toHaveLength(mockCharacterList.length);
  });

  it('should not break without characters', () => {
    const wrapper = shallow(<MostPopular />);

    expect(wrapper.find(Card)).toHaveLength(0);
  });

  it('should not break with empty array', () => {
    const wrapper = shallow(<MostPopular data={[]} />);

    expect(wrapper.find(Card)).toHaveLength(0);
  });
});

describe('With Snapshot Testing', () => {
  it('Rendering MostPopular', () => {
    const component = renderer.create(<MostPopular />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
