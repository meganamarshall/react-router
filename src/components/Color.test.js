import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('random color component', () => {
  it('renders a random color', () => {
    const color = 'purple';
    const wrapper = shallow(<Color color={color}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
