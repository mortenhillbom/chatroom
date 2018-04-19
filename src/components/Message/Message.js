import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = ({ user, message, currentUser }) => {
  const MessageBox = styled.div`
    float: ${user === currentUser ? 'right' : 'left'};
    background: ${user === currentUser ? '#f1f0f0' : user.color};
    color: ${user === currentUser ? '#000000' : '#ffffff'};
  `;

  const name = user === currentUser ? '' : <b>{user.username}: </b>;

  return (
    <MessageBox id="message">
      <p>
        {name}
        {message}
      </p>
    </MessageBox>
  );
};

Message.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
