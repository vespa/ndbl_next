import React from 'react';
import { shallow } from 'enzyme';
import FooterMenu from './index';

describe('[Component: FooterMenu]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterMenu />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
