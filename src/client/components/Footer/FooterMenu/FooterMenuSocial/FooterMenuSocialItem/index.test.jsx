import React from 'react';
import { shallow } from 'enzyme';
import FooterMenuSocialItem from './index';

describe('[Component: FooterMenuSocialItem]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterMenuSocialItem text="test" href="/" />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
