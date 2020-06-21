import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';

import {deleteEvent, updateEvent} from '../../../store/ac';



const EventDashboard = (props) => {

  const {events, deleteEvent} = props;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Feed</h2>
      </Grid.Column>
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps,
  {updateEvent, deleteEvent}
  )(EventDashboard);