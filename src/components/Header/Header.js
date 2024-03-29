import React from 'react';
import logo from 'assets/mortenerpen.png';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TopBar = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`;

const Header = () => (
  <TopBar>
    <img src={logo} className="redux-logo" alt="logo" />
    <h2>Mortens Chatroom</h2>
  </TopBar>
);

export default Header;
