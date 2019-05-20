import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('random color component', () => {
  it('renders a random color', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
