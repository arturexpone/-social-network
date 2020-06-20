import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {Grid} from 'semantic-ui-react';

import {SettingsNav} from './SettingNav';
import {BasicPage} from './BasicPage';
import {AccountPage} from './AccountPage';
import {PhotosPage} from './PhotosPage';
import {AboutPage} from './AboutPage';

export const SettingsDashboard = (props) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route to='/settings/basic' component={BasicPage} />
          <Route to='/settings/about' component={AboutPage} />
          <Route to='/' component={PhotosPage} />
          <Route to='/settings/account' component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}