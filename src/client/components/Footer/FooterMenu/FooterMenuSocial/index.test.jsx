import React from 'react';
import { shallow } from 'enzyme';
import FooterMenuSocial from './index';

describe('[Component: FooterMenuSocial]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterMenuSocial title="test" />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
