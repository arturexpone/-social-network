import React from 'react';
import {Header, Segment} from 'semantic-ui-react';

export const EventActivity = (props) => {
  return (
    <>
      <Header attached='top' content='Recent Activity' />
      <Segment attached>
        <p>Recent Activity</p>
      </Segment>
    </>
  );
};
