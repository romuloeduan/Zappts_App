import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '1082882425649-79cap3lvn6u2bntae187krdqs1lcq0hi.apps.googleusercontent.com';

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    //alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    //alert('Failed to log out')
  }

  render() {
    return (
    <>
      { this.state.isLogined ?
        <GoogleLogout
          className="btnGoogle"
          clientId={ CLIENT_ID }
          buttonText='Sign in with Google'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          className="btnGoogle"
          clientId={ CLIENT_ID }
          buttonText='Sign in with Google'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

    </>
    )
  }
}

export default GoogleBtn;