import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WriteMessage from './WriteMessage';

describe('WriteMessage', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <WriteMessage
        currentUser={() => {}}
        sendMessage={() => {}}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
