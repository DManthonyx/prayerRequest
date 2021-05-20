import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.header`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 10px 0px 0px 0px;
`

export const Link = styled(NavLink)`
  width: 150px;
  height: 36px;
  border: 0px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  background: whhite;
  background: #ffffff00;
  color: white;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`