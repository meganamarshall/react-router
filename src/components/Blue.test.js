import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('blue component', () => {
  it('renders blue', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  });
});
