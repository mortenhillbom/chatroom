import React from 'react';
import PropTypes from 'prop-types';

let newMessage;
const WriteMessage = ({ sendMessage, currentUser }) => (
  <section id="write-message">
    <textarea
      onKeyPress={k => {
        if (k.key === 'Enter' && !k.shiftKey) {
          k.preventDefault();
          sendMessage(newMessage.value, currentUser);
          newMessage.value = '';
        }
      }}
      ref={node => {
        newMessage = node;
      }}
    />
  </section>
);

WriteMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default WriteMessage;
