import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <Message
        currentUser={() => {}}
        message={() => {}}
        user={() => {}}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
