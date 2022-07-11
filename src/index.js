import React from 'react';
import { render } from 'react-dom';
import  {App } from './App';
import './App.scss';
import './Routes.js';

render(<App />, document.getElementById('root'));


ReactDOM.render(
  <BrowserRouter>
    <App/> hapa ndo penye the route from splash to log in to sign up to main page should be written ok 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
