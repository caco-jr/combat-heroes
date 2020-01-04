import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { SearchWrapper, SearchInput } from './index.style';
import Search from './index';

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should input exists', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find(SearchInput).exists()).toBe(true);
  });

  it('user text is echoed', () => {
    const wrapper = shallow(<Search />);

    wrapper
      .find(SearchInput)
      .simulate('change', { target: { value: 'Hello' } });

    expect(wrapper.find(SearchInput).props().value).toEqual('Hello');
  });

  it('when the form is submitted the event is cancelled', () => {
    const wrapper = shallow(<Search />);
    let prevented = false;

    wrapper.find(SearchWrapper).simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });

    expect(prevented).toBe(true);
  });
});

describe('With Snapshot Testing', () => {
  it('Rendering Search', () => {
    const component = renderer.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
