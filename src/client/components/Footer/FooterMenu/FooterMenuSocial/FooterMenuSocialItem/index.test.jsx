import React from 'react';
import { shallow } from 'enzyme';
import FooterMenuSocialItem from './index';

describe('[Component: FooterMenuSocialItem]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterMenuSocialItem title="test" />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
