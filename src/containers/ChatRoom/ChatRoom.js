import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatRoomActions from 'modules/ChatRoom';
import { ChatRoom } from 'components/ChatRoom';

import {
  apiSendMessage,
  apiReceiveMessage,
  apiAddUser,
  apiWhoAmI,
  apiGetUserList,
} from 'api';

class ChatRoomContainer extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    receiveMessage: PropTypes.func.isRequired,
    getUserList: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        user: PropTypes.shape({
          id: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    currentUser: null,
  };

  constructor(props) {
    super(props);
    apiReceiveMessage(this.receiveMessage);
    apiWhoAmI(this.whoAmI);
    apiGetUserList(this.getUserList);
  }

  getUserList = userList => {
    this.props.getUserList({ userList });
  };

  receiveMessage = (message, user) => {
    this.props.receiveMessage(message, user);
  };

  sendMessage = (message, user) => {
    apiSendMessage(message, user);
    this.props.sendMessage({ message, user });
  };

  addUser = username => {
    apiAddUser(username);
  };

  whoAmI = (id, username) => {
    this.props.addUser(id, username);
  };

  render() {
    if (!this.props.currentUser) {
      let input;
      return (
        <div id="ohnanawhatismyname">
          <br />
          <h3>Ka du hete?</h3>
          <input
            id="write-name"
            onKeyPress={k => {
              if (k.key === 'Enter') {
                this.addUser(input.value);
                input.value = '';
              }
            }}
            type="text"
            ref={node => {
              input = node;
            }}
          />
        </div>
      );
    }
    return (
      <ChatRoom
        sendMessage={this.sendMessage}
        messages={this.props.messages}
        users={this.props.users}
        currentUser={this.props.currentUser}
      />
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chatroom.messages,
  users: state.chatroom.users,
  currentUser: state.chatroom.currentUser,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatRoomActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomContainer);
