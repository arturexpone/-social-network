import React from 'react';
import {Icon, Segment} from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

export const EventDetailedMap = (props) => {

  const Marker = () => <Icon name='marker' size='big' color='red' />;

  const {lat, lng} = props;
  const zoom = 14;

  return (
    <Segment attached='bottom' style={{padding: 0}}>
      <div style={{height: '300px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyANpElV5_j-ehOb8bxzrdFW392yBYnx-Ok' }}
          defaultCenter={{lat, lng}}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
