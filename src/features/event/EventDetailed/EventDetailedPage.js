import React from 'react';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {EventDetailedHeader} from './EventDetailedHeader';
import {EventDetailedInfo} from './EventDetailedInfo';
import {EventDetailedChat} from './EventDetailedChat';
import {EventDetailedSidebar} from './EventDetailedSidebar';


const EventDetailsPage = (props) => {

  const {events, match} = props;

  const event = events.filter(e => match.params.id === e.id)[0] || {};

  return (
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader
            date={event.date}
            hostedBy={event.hostedBy}
            category={event.category}
            title={event.title}
            id={match.params.id}
          />
          <EventDetailedInfo
            {...event}
          />
          <EventDetailedChat />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventDetailedSidebar event={event}/>
        </Grid.Column>
      </Grid>
  )
};

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps, {})(EventDetailsPage)