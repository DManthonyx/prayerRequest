import React, { useEffect } from 'react';
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
  H4,
  P,
  Button,
  PrayIcon,
  PrayingHandsIcon,
  BookHeartIcon,
  LightModeIcon,
  PeopleCommunityIcon
} from './style'

const Prayers = (props) => {

  useEffect(() => {
    props.getRandomPrayer();
  },[props.getRandomPrayer]);

  const { random } = props.state.prayers;

  return (
    <Wrapper>
      <Section>
        <Div className='one'>
          <H1>Speaking into Existence</H1>
          <H4>We hope that this message and energy being sent your way can find a place from within and resonate where it needs to ne in this current moment</H4>
          <Div className='icon-div'>
            <PrayIcon />
            <PrayingHandsIcon />
            <BookHeartIcon />
            <LightModeIcon />
            <PeopleCommunityIcon />
          </Div>
        </Div>
        <Div className='two'>
          <P>A prayer from {random.name}</P>
          <P className='prayer'>{random.prayer}</P>
        </Div>
      </Section>
    </Wrapper>
  )
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Prayers));