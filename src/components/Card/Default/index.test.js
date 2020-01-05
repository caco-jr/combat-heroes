import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';

import Card from './index';
import makeStore from '../../../redux';
import { ADD_TO_SLOT } from '../../../redux/actions/actionTypes';
import { CardTitle } from './index.style';

const mock = {
  id: 39,
  name: 'Batman',
  image: {
    url: ''
  }
};

describe('With Enzyme', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Provider store={makeStore()}>
        <Card {...mock} />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should card render character name', () => {
    const wrapper = mount(
      <Provider store={makeStore()}>
        <Card {...mock} />
      </Provider>
    );

    expect(wrapper.find(CardTitle).text()).toEqual(mock.name);
  });

  //   it('should select current character to slot', () => {
  //     const characterMock = {
  //       id: '208',
  //       name: 'Darth Vader',
  //       image: {
  //         url: ''
  //       },
  //       biography: {
  //         fullName: 'Anakin Skywalker',
  //         placeOfBirth: 'Tatooine'
  //       },
  //       slotName: 'playerOne'
  //     };

  //     const wrapper = mount(
  //       <Provider store={makeStore()}>
  //         <Card {...mock} />
  //       </Provider>
  //     );

  //     // makeStore().dispatch({
  //     //   type: ADD_TO_SLOT,
  //     //   who: { id: characterMock.id },
  //     //   object: characterMock
  //     // });

  //     expect(wrapper.find(CardTitle).text()).toEqual(characterMock.name);
  //   });
});

describe('With Snapshot Testing', () => {
  it('Rendering Preview', () => {
    const component = renderer.create(
      <Provider store={makeStore()}>
        <Card />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
