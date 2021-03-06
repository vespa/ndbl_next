import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './index';

describe('[Component: SearchBox]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBox />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
