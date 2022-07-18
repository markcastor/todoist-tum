import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.scss';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Routes} from './Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
//import Routes from './Routes';


 render(<Routes />, document.getElementById('root'));
// ReactDOM.render(
   
//     <BrowserRouter>
//     <Routes>
      // <Route exact path="/login">
      //       {<Login />}
      //   </Route>
      
//       </Routes>
//     </BrowserRouter>,
//     document.getElementById('root')
 // );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
