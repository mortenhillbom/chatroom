import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-areas: "sidebar main";
      width: 100vw;
      height: 100vh;
      
  }
  
  #main {
      grid-area: main;
      display: grid;
      grid-template-rows: 9fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: "messagelist newmessage";
  }
  
  #users {
      grid-area: sidebar;
      padding: 5px 0 0 5px;
      border-right: 1px solid #3f3f3f;
      height: 100%;
  }
  
  #messages-parent {
      grid-area: messagelist;
      position: relative;
  } 
  
  #messages {
      height: 100%;
      width: 100%;
      padding: 10px;
      overflow: scroll;
  }
  
  #write-message {
      grid-area: newmessage;
      position: fixed;
      bottom: 0;
      margin-left: 0px;
      border-top: 1px solid #3f3f3f;
      padding: 0px;
      width: 75%;
  }
  
  #write-message textarea {
      height: 100%;
      margin: 0;
      padding: 15px;
      font-size: 20px;
      resize: none;
      width: 100%;
  }
  
  #write-name {
      width: 40%;
      height: 20%;
      margin: 10px;
      padding: 10px;
      font-size: 20px;
  }
  
  #ohnanawhatismyname {
    height: 100%;
  }
`;
