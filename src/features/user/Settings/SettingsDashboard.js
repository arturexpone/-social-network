import React from 'react';

import {Grid} from 'semantic-ui-react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {SettingsNav} from './SettingNav';
import BasicPage from './BasicPage';
import {PhotosPage} from './PhotosPage';
import {AboutPage} from './AboutPage';
import AccountPage from './AccountPage';

export const SettingsDashboard = (props) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/account' component={AccountPage} />
          <Route path='/' component={PhotosPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}