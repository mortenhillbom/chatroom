import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users }) => (
  <section id="users">
    <h3>Folk:</h3>
    <br />
    <ul>{users.map(user => <li key={user.id}>{user.username}</li>)}</ul>
  </section>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default UserList;
