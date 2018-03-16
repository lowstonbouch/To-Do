import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../../app/components/Main';

const chai = require('chai');
const expect = chai.expect;

configure({ adapter: new Adapter() });

describe('Main Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
});