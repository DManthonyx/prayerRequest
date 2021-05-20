import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Pray } from '@styled-icons/fa-solid/Pray';
import { PrayingHands } from '@styled-icons/fa-solid/PrayingHands';
import { BookHeart } from '@styled-icons/boxicons-regular/BookHeart';
import { LightMode } from '@styled-icons/material-rounded/LightMode';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';

import { slideIn } from './animations'

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  color: #dbe4ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Section = styled.section`
  display: flex;
`

export const Div = styled.div`
  &.intro-div {
    width: 600px;
    padding: 0px 20px 0px 0px;
    position: relative;
    bottom: 60px;
    animation-name: ${ slideIn };
    animation-duration: 1.5s;
  }
  &.btn-div {
    margin: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 60px;
    animation-name: ${ slideIn };
    animation-duration: 1.5s;
  }
  &.icon-div {
    display: flex;
    justify-content: center;
    margin: 20px 0px 0px 0px;
  }
  &.icon-div svg {
    width: 35px;
    margin: 0px 20px;
  }
`

export const H1 = styled.h1`
  font-size: 3em;
  margin: 0px 0px 10px 0px;
`

export const H2 = styled.h2`
  font-size: 1em;
  line-height: 1.5;
  word-spacing: 2px;
  width: 93%;
`

export const P = styled.p`

`

export const Span = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Button = styled.button`
  width: 250px;
  height: 46px;
  border: 2px solid white;
  background: whhite;
  background: #ffffff00;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 9px white;
    background: white;
    color: #19a3e1;
    font-weight: bolder;
    animation-name: ${ slideIn };
    animation-duration: 1s;
  }
  &:focus {
    outline: none;
  }
`

export const Link = styled(NavLink)`
  width: 250px;
  height: 46px;
  border: 2px solid white;
  background: whhite;
  background: #ffffff00;
  color: white;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: white;
    color: #19a3e1;
    font-weight: bolder;
    animation-name: ${ slideIn };
    animation-duration: 1s;
  }
`

export const PrayIcon = styled(Pray)`

`

export const PrayingHandsIcon = styled(PrayingHands)`

`

export const BookHeartIcon = styled(BookHeart)`

`
export const LightModeIcon = styled(LightMode)`

`

export const PeopleCommunityIcon = styled(PeopleCommunity)`

`