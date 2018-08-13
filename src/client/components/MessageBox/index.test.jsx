import React from 'react';
import { shallow } from 'enzyme';
import MessageBox from './index';

describe('[Component: MessageBox]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MessageBox />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
