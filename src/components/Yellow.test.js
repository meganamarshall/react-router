import React from 'react';
import { shallow } from 'enzyme';
import Yellow from './Yellow';

describe('yellow component', () => {
  it('renders yellow', () => {
    const wrapper = shallow(<Yellow />);
    expect(wrapper).toMatchSnapshot();
  });
});
