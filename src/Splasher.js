import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom'


import auth0Client from './Auth';
import withSplashScreen from './components/withSplashScreen';

class Splasher extends Component {
  async componentDidMount() {
    try {
      await auth0Client.loadSession();
      setTimeout(() => {
        this.forceUpdate();
      }, 100)
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        
        <div className="container-fluid">
          
        </div>
      </Fragment>
    );
  }
}

export default withSplashScreen(Splasher);
