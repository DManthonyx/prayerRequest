import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

// components
import Home from '../Home';
import Header from '../Header';
import Prayers from '../Prayers';
import PrayerForm from '../PrayerForm';

// redux
import { GetAllPrayers } from '../../Store/Actions/prayerActions'

// styles
import {
  Wrapper,
  Section,
} from './style';

const App = ({location, getAllPrayers}) => {

  useEffect(() => {
    getAllPrayers();
  },[getAllPrayers])

  return (
    <Wrapper>
      <Header />
      <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
      <Section className="route-section">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/prayers' component={ Prayers } />
        <Route exact path='/send_prayer' component={ PrayerForm } />
      </Switch>
      </Section>
      </CSSTransition>
      </TransitionGroup>
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
    getAllPrayers: () => dispatch(GetAllPrayers())
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));