import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

export  const Route = () => {
    return(
        
        <Routes>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/App' element={< App />}></Route>
        
    </Routes>
    );
};
// export default Route;