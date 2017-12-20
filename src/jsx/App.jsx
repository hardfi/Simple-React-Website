import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

// import components
import Footer from './Components/Footer/';
import Navigation from './Components/Navi/';
import Header from './Components/Header/';
import Slider from './Components/Slider/';
import StuffSection from './Components/StuffSection/';

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
