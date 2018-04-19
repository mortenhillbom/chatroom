import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserList from './UserList';

describe('UserList', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <UserList
        users={() => {}}
        currentUser={() => {}}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
