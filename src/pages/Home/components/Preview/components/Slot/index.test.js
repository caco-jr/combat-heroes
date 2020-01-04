import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';

import PreviewSlot from './index';
import makeStore from '../../../../../../redux';

const mock = {
  id: '208',
  name: 'Darth Vader',
  image: {
    url: ''
  },
  biography: {
    fullName: 'Anakin Skywalker',
    placeOfBirth: 'Tatooine'
  },
  slotName: 'playerOne'
};

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = mount(
      <Provider store={makeStore()}>
        <PreviewSlot {...mock} />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should return the default empty block when there is no data', () => {
    const wrapper = shallow(
      <Provider store={makeStore()}>
        <PreviewSlot />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should preview block appear', () => {
    const wrapper = mount(
      <Provider store={makeStore()}>
        <PreviewSlot {...mock} />
      </Provider>
    );

    expect(wrapper.find('section.c-preview-slot').exists()).toBe(true);
  });

  it('should not break without character selected', () => {
    const wrapper = mount(
      <Provider store={makeStore()}>
        <PreviewSlot />
      </Provider>
    );

    expect(wrapper.find('section.c-preview-slot').exists()).toBe(false);
  });
});

describe('With Snapshot Testing', () => {
  it('Rendering Preview', () => {
    const component = renderer.create(
      <Provider store={makeStore()}>
        <PreviewSlot />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
