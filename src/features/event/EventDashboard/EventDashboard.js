import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

import {EventList} from '../EventList/EventList';
import {EventActivity} from '../EventActivity/EventActivity';
import {LoadingComponent} from '../../common/LoadingComponent/LoadingComponent';

import {deleteEvent, updateEvent} from '../../../store/ac';


const EventDashboard = (props) => {

  const {events, deleteEvent, loading} = props;

  if (events) {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleDeleteEvent={deleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }


  return (
    <LoadingComponent />
  )
};

export default compose(
  firestoreConnect(() => ['events']),
  connect((state, props) =>
    ({
      events: state.firestore.ordered.events,
      loading: false
    }),
    {updateEvent, deleteEvent}),
)(EventDashboard);