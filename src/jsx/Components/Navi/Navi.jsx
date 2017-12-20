import React from 'react';
import {IndexLink} from 'react-router';

class Navigation extends React.Component{
  render(){
    console.log({IndexLink});
    return (
      <nav>
        <li><IndexLink to='/'>HOME</IndexLink></li>
        <li><IndexLink to='/blog'>BLOG</IndexLink></li>
        <li><IndexLink to='/about'>ABOUT</IndexLink></li>
      </nav>
    )
  }
}

export default Navigation
