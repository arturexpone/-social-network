import React from 'react';

import {Button, Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';
import {EventForm} from '../EventForm/EventForm';

export const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button positive content='Добавить мероприятие'/>
        <EventForm />
      </Grid.Column>
    </Grid>
  )
}