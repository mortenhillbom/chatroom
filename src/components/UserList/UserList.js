import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, currentUser }) => (
  <section id="users">
    <h2>Folk:</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p
            id="user"
            style={{
              color: user.color,
              textDecoration: user.id === currentUser.id ? 'underline' : 'none',
            }}
          >
            <b>{user.username}</b>
          </p>
        </li>
      ))}
    </ul>
  </section>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserList;
