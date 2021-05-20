import styled from 'styled-components';
import { Pray } from '@styled-icons/fa-solid/Pray';
import { PrayingHands } from '@styled-icons/fa-solid/PrayingHands';
import { BookHeart } from '@styled-icons/boxicons-regular/BookHeart';
import { LightMode } from '@styled-icons/material-rounded/LightMode';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';
import { slideIn } from './animations';
export const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const Section = styled.section`

`

export const Div = styled.div`
  &.input-div {
    height: 112px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 600px;
  height: 212px;
  padding: 20px;
`
export const Button = styled.button`
  height: 35px;
  background: #18b0e9;
  border: 0px;
  color: white;
  font-size: 1.1em;
  font-weight: 200;
  cursor: pointer;
  box-shadow: 0px 0px 9px #18b0e9;
  display: ${props => props.success ? 'none' : 'block'};
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
`
export const Input = styled.input`
  height: 35px;
  padding: 0px 0px 0px 11px;
  margin: 0px 0px 20px 0px;
  border: 0px;
  border-bottom: 1px solid black;
  display: ${props => props.success ? 'none' : 'block'};
  width: 100%;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #00000012;
  }
`
export const H1 = styled.h1`
  text-align: center;
  font-size: 2.3em;
  color: white;
  margin: 0px 0px 10px 0px;
  width: 600px;
`
export const P = styled.p`
  &.error {
    height: 15px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 10px 0px;
  }
  &.success {
    color: green;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    display: ${props => props.success ? 'flex' : 'none'};
    font-weight: bolder;
    animation-name: ${ slideIn };
    animation-duration: 3s;
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