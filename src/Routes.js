import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

const Routes = () => {
    return(
        <Route exact path="/login">
            <Login />
        </Route>
        // <Router>
        //     <Routes>
        //     <Route path="/src/components/layout/Header.js" element={<Header darkMode={darkMode} setDarkMode={setDarkMode} />} />
        //     <Route path="/src/components/layout/Content.js" element={<Content />} />
        //     create the path here then call this page in index.js
        //     cause index.js is what is going to be seen uko mbele you get         
        //     </Routes>
        // </Router>
    );
};
export default Routes;