import React from 'react';
import Navigation from '../Navi/'

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <div>
          <div>
            <Navigation />
          </div>
          <div>
            <h5>Zapisz się!</h5>
            <input type='email' /><button>Wyślij</button>
            <div>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <h5>Cookies</h5>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
