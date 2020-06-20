import React from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';

import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import {HomePage} from './features/home/HomePage';
import {EventDetailsPage} from './features/event/EventDetailed/EventDetailedPage';
import {PeopleDashboard} from './features/user/PeopleDashboard/PeopleDashboard';
import {UserDetailedPage} from './features/user/UserDetailed/UserDetailedPage';
import {SettingsDashboard} from './features/user/Settings/SettingsDashboard';
import {EventForm} from './features/event/EventForm/EventForm';



export const App = () => {
  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Switch>
              <Route exact path='/events' component={EventDashboard}/>
              <Route exact path='/events/:id' component={EventDetailsPage}/>
              <Route exact path='/people' component={PeopleDashboard}/>
              <Route exact path='/profile/:id' component={UserDetailedPage}/>
              <Route path='/settings' component={SettingsDashboard}/>
              <Route exact path='/create-event' component={EventForm}/>
            </Switch>
          </Container>
        </>
      )}/>
    </>
  );
};

