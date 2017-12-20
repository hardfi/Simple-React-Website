import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import Footer from './Components/Footer/';
import Navigation from './Components/Navi/';

class Homepage extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div id='main'>
        <Header />
        <Slider />
        <GalleryStripe />
        <ArticlePreview />
        <VideoSection />
        <StuffSection />
        <Footer />
      </div>
    )
  }
}



class VideoSection extends React.Component{
  render(){
    return (
      <section>
        <div>
          <h4>Video playing right here</h4>
        </div>
      </section>
    )
  }
}

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



class ArticlePreview extends React.Component {
  render() {
    return (
      <section>
        <img src='../122.jpg' alt='obrazek kolejny' />
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
    )
  }
}

class GalleryStripe extends React.Component{
  render(){

    let imgStyle = {
      width: '200px',
      margin: '5px'
    }
    let sectionStyle = {
      display: 'flex'
    }

    return (
      <section style={sectionStyle}>
        <div>
          <a href="/"><img src="122.jpg" style={imgStyle}/></a>
        </div>
        <div>
          <a href="/"><img src="122.jpg" style={imgStyle}/></a>
        </div>
        <div>
          <a href="/"><img src="122.jpg" style={imgStyle}/></a>
        </div>
        <div>
          <a href="/"><img src="122.jpg" style={imgStyle}/></a>
        </div>
      </section>
    )
  }
}

class Slider extends React.Component{
  render(){
    return (
      <section>
        <ul>
          <li><h2>Pierwszy slajd</h2><button>Buy here!</button></li>
          <li><h2>Drugi slajd</h2><button>Buy here!</button></li>
          <li><h2>Trzeci slajd</h2><button>Buy here!</button></li>
          <li><h2>Czwarty slajd</h2><button>Buy here!</button></li>
        </ul>
      </section>
    )
  }
}

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

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Homepage}>
          <IndexRoute component={Main} />
        </Route>
      </Router>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
