import React from 'react';
import {Button, Container} from 'semantic-ui-react';

import {EventDashboard} from './features/event/EventDashboard';
import {NavBar} from './features/nav/NavBar/NavBar';

export const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
          <EventDashboard />
      </Container>
      </>
  );
};

