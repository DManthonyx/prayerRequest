import React from 'react';


// style
import {
  Nav,
  Link
} from './style';

const Header = (props) => {
  return (
    <Nav>
      <Link to='/'>HOME</Link>
      <Link to='/send_prayer'>SEND</Link>
      <Link to='/prayers'>REQUEST</Link>
    </Nav>
  )
}

export default Header;