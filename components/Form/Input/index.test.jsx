import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('[Component: Input]', () => {
  let wrapper;
  const props = {
    title: 'Name',
    name: 'name',
    type: 'text',
    required: true,
    validation: 'no-empty',
  };
  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
