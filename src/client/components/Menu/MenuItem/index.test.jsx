import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './index';

describe('[Component: Input]', () => {
  let wrapper;
  const props = {
    text: 'Name',
    href: 'name',
  };
  beforeEach(() => {
    wrapper = shallow(<MenuItem {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
