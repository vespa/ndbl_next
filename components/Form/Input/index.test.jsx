import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('[Component: Input]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
