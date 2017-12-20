import React from 'react';

class Person extends React.Component{
  render(){
    return (
      <section>
        <div>
          <img/>
          <h5>Jan Majstersztyk</h5>
          <p>Pracuje z nami bo nikt inny nie chce go zatrudnić. Brat szefa.</p>
          <div>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </div>
        </div>
      </section>    )
  }
}

export default Person
