import React from 'react';

import {Button, Container, Header, Icon, Image, Segment} from 'semantic-ui-react';

import logo from '../../assets/images/logo.png'

export const HomePage = (props) => {

  const {history} = props;

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src={logo}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Social Network
        </Header>
        <Button
          size='huge'
          inverted
          onClick={() => history.push('/events')}
          >
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}