import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { GetRandomPrayer } from '../../Store/Actions/prayerActions';

// styles
import {
  Wrapper,
  Section,
  Div,
  H1,
  H2,
  P,
  Span,
  Button,
  Link,
  PrayIcon,
  PrayingHandsIcon,
  BookHeartIcon,
  LightModeIcon,
  PeopleCommunityIcon
} from './style';

const Home = (props) => {

  useEffect(() => {
      props.getRandomPrayer();
  },[props.getRandomPrayer]);

  const { random } = props.state.prayers;

  return (
    <Wrapper>
      <Section className='one'>
        <Div className='intro-div'>
          <H1>Prayer Request</H1>
          <H2>A place where you can send a prayer to the world and recieve a prayer from the world. Where your prayer and energy can be felt from around the world. Where you can recieve a prayer from another person jsut like you. Bringing <Span>healing through prayer and energy</Span> & reminding a community of what we have in common. Within our beliefs we are here to recogniz our similarities.</H2>
          <Div className='icon-div'>
            <PrayIcon />
            <PrayingHandsIcon />
            <BookHeartIcon />
            <LightModeIcon />
            <PeopleCommunityIcon />
          </Div>
        </Div>
        <Div className='btn-div'>
          <Link to='/send_prayer'>SEND A PRAYER</Link>
          <Link to='/prayers'>REQUEST A PRAYER</Link>
        </Div>
      </Section>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
      state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomPrayer: () => dispatch(GetRandomPrayer())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));