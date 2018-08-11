import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './index';

configure({ adapter: new Adapter() });

describe('[Component: Input]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
