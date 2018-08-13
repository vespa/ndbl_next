import React from 'react';
import { shallow } from 'enzyme';
import Template from './index';

describe('[Component: FooterMenu]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Template> test </Template>);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
