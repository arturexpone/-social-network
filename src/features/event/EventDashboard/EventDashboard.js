import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';
import {EventActivity} from '../EventActivity/EventActivity';
import {LoadingComponent} from '../../common/LoadingComponent/LoadingComponent';

import {deleteEvent, updateEvent} from '../../../store/ac';


const EventDashboard = (props) => {

  const {events, deleteEvent, loading} = props;

  if (loading) {
    return <LoadingComponent />
  }

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
};

const mapStateToProps = (state) => ({
  events: state.events,
  loading: false
});

export default connect(mapStateToProps,
  {updateEvent, deleteEvent}
  )(EventDashboard);