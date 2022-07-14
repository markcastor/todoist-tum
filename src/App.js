import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Header } from './components/layout/Header';
// import { Content } from './components/layout/Content';
import Routing from './Routes';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Routing />
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
