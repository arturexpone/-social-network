import React, {useState} from 'react';
import {Button, Grid, Icon, Segment} from 'semantic-ui-react';
import {EventDetailedMap} from './EventDetailedMaps';
import {format, parseISO} from 'date-fns';

export const EventDetailedInfo = (props) => {

  const {description, date, venue, venueLatLng} = props;

  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
              {format(parseISO(date), 'EEEE do LLL')}
              at {' '}
              {format(parseISO(date), 'h:mm a')}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setIsMapOpen(!isMapOpen)}
              color="teal"
              size="tiny"
              content={isMapOpen ? ` Hide Map` : 'Show Map'} />
          </Grid.Column>
        </Grid>
      </Segment>
      {isMapOpen ? <EventDetailedMap lat={venueLatLng.lat} lng={venueLatLng.lng} /> : null}
    </Segment.Group>
  );
}
