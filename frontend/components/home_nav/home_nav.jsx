import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class HomeNav extends React.Component {
	constructor(props) {
		super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
	}

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => hashHistory.push('/'));
  }

  guestLogin(e) {
    e.preventDefault();
    let guest = {user: {username: 'guest', password: 'password'}};
    this.props.login(guest).then(() => hashHistory.push('/'));
  }

  render() {

    const logoutButton =(
    <ul className='session-buttons'>
    <a href='#' onClick={this.handleLogout}>Sign out</a>
    </ul>);
    const sessionButtons = (
      <div className='session-buttons'>
        <Link to='/signin'>Sign in</Link>
        &nbsp;/&nbsp;
        <Link to='/signup'>Sign up</Link>
        &nbsp;/ <span className='guest-link'>
        <a href='#' onClick={ this.guestLogin }>Sign in as guest</a>
        </span>
      </div>
    );

    let helloMessage = ' ';
    let buttons;
    let imageUrl;

    if(this.props.loggedIn){
      helloMessage = `Hello, ${this.props.currentUser.name}!`;
      buttons = logoutButton;
      imageUrl = this.props.currentUser.image_url;
    } else {
      buttons = sessionButtons;
    }

    // need to style the avatar better, of course
    return(
      <div className='nav-outer'>
        <div className='home-nav'>
          <img src={ window.images.bad_logo } height='40px' id='logo' />
          <div className='nav-right'>
            <div className='hello-message'>
              { helloMessage }
            </div>
            <div className='write-story-message'>
              <Link to='/write'>Write a Story</Link>
            </div>
            { buttons }
            <div className='mag-glass'>
              <img src={window.images.mag_glass} />
            </div>
            <div className='mag-glass'>
              <img src={ imageUrl } width='30px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(HomeNav);
