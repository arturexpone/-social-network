import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';
import AddEventForm from '../EventForm/AddEventForm';

import {deleteEvent, updateEvent} from '../../../store/ac';



const EventDashboard = (props) => {

  const {events, deleteEvent} = props;

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button onClick={()=> setIsOpen(true)} positive content='Add event'/>
        { isOpen
          &&
          <AddEventForm
            handlerCancelForm={() => setIsOpen(false)}
          />
        }
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