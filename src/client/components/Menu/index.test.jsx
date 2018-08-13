import React from 'react';
import { shallow } from 'enzyme';
import Menu, { Logo, MenuOptions } from './index';

describe('[Component: Menu]', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    wrapper = shallow(<MenuOptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
