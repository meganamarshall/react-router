import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('random color component', () => {
  it('renders a random color', () => {
    const match = {
      params: {
        color: 'orange'
      }
    };
    const wrapper = shallow(<Color match={match}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

