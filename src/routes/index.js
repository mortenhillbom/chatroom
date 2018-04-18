import React from 'react';
import { ChatRoomContainer } from 'containers';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';
import { history } from 'store';

const Container = styled.div`
  text-align: center;
`;

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Container>
        <Route exact path="/" component={ChatRoomContainer} />
      </Container>
    </ConnectedRouter>
  );
}

export default Routes;
