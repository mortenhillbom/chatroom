import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ChatRoom from './ChatRoom';

describe('ChatRoom', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <ChatRoom
        currentUser={() => {}}
        messages={() => {}}
        users={() => {}}
        sendMessage={() => {}}
        receiveMessage={() => {}}
        addUser={() => {}}
        getUser={() => {}}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
