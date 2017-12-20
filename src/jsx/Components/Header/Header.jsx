import React from 'react';
import Navigation from '../Navi/';

class Header extends React.Component{
  render(){
    return (
      <header>
        <img src='logo.png' width='100px' alt='Company Logo'/>
        <Navigation />
      </header>
    )
  }
}

export default Header
