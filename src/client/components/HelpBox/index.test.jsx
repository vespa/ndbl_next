import React from 'react';
import { shallow } from 'enzyme';
import HelpBox from './index';

describe('[Component: HelpBox]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HelpBox title="test" subtitle="test 2" img="open" />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
