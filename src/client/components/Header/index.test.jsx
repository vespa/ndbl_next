import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('[Component: Header]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header title="test" subtitle="test 2" img="open" />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
