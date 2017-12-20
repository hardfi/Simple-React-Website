import React from 'react';
import Person from './Person'

class StuffSection extends React.Component{
  render(){
    return (
      <div>
        <Person />
        <Person />
        <Person />
      </div>
      )
  }
}

export default StuffSection
