import React from 'react';
import { shallow } from 'enzyme';
import FooterMenuSocial from './index';

describe('[Component: FooterMenu]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterMenuSocial title="test" links={[{ text: 'Home', href: '/' }]} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
