import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';


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
        <header>
          <img src='logo.png' width='100px' alt='Company Logo'/>
          <nav>
            <li><IndexLink to='/'></IndexLink>HOME</li>
            <li><IndexLink to='/blog'></IndexLink>BLOG</li>
            <li><IndexLink to='/about'></IndexLink>ABOUT</li>
          </nav>
        </header>
      </div>
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
