import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { AddPrayer } from '../../Store/Actions/prayerActions';

// styles
import {
  Wrapper,
  Section,
  Div,
  H1,
  P,
  Button,
  Form,
  Input,
  PrayIcon,
  PrayingHandsIcon,
  BookHeartIcon,
  LightModeIcon,
  PeopleCommunityIcon
} from './style';

const PrayerForm = (props) => {

  const [ inputs, setInputs ] = useState({name: '', prayer: ''});
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState(false);

  const submit = async(e) => {
    e.preventDefault();
    e.persist();
    if(validate(inputs)) {
      setError('');
      const add = await props.addPrayer(inputs)
      if(add) {

        setError('');
        setSuccess(true);
      }
    } else {
      setError('Please fill out name and prayer');
    }
    return;
  }

  const validate = (form) => {
    const keys = Object.keys(form)
    for(let key of keys) {
      if(form[key] === '') { return false; }
    }
    return true;
  }

  const handleInput = (e) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }

  return (
    <Wrapper>
      <Section>
        <Div>
          <H1>Let your words be the energy to power someones day</H1>
          <Form onSubmit={submit}>
            <Div className='input-div'>
              <Input type='text' name='name' value={inputs.name} placeholder='NAME' onChange={handleInput} success={success}/>
              <Input type='text' name='prayer' value={inputs.prayer} placeholder='PRAYER' onChange={handleInput} success={success}/>
              <P className='success' success={success}>Thanks for sending some positivity out in the world!</P>
            </Div>
            <P className='error'>{error}</P>
            <Button success={success}>SEND PRAYER</Button>
          </Form>
          <Div className='icon-div'>
            <PrayIcon />
            <PrayingHandsIcon />
            <BookHeartIcon />
            <LightModeIcon />
            <PeopleCommunityIcon />
          </Div>
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
    addPrayer: (payload) => dispatch(AddPrayer(payload))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrayerForm));