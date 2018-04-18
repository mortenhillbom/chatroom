import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Messages from './Messages';

describe('Messages', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <Messages
        currentUser={() => {}}
        messages={() => {}}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
