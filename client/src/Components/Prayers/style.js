import styled from 'styled-components';
import { Pray } from '@styled-icons/fa-solid/Pray';
import { PrayingHands } from '@styled-icons/fa-solid/PrayingHands';
import { BookHeart } from '@styled-icons/boxicons-regular/BookHeart';
import { LightMode } from '@styled-icons/material-rounded/LightMode';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const Section = styled.section`
  display: flex;
  width: 800px;
`

export const Div = styled.div`
  &.one {
    padding: 0px 20px 0px 0px;
    width: 450px;
  }
  &.two {
    padding: 0px 0px 0px 8px;
    width: 350px;
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
  font-size: 2.3em;
  margin: 0px 0px 10px 0px;
`

export const H4 = styled.h4`
  font-size: 1em;
  margin: 0px 0px 10px 0px;
`

export const P = styled.p`
  font-size: 1em;
  line-height: 1.5;
  word-spacing: 2px;
  width: 100%;
  background: white;
  color: black;
  padding: 0px 0px 0px 10px;
  &.prayer {
    overflow-wrap: break-word;
  }
`

export const Ul = styled.ul`

`

export const Li = styled.li`

`

export const Button = styled.button`

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
