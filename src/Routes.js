import React, { useState } from "react";
import PropTypes from "prop-types";
import Main from "./components/layout/Main";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        {/* <Route path="/src/components/layout/Content.js" element={<Content />} /> */}
      </Routes>
    </Router>
  );
};
export default Routing;
