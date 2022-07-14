import React, { useState } from "react";
import { Sidebar } from "./Sidebar.js";
import { Tasks } from "../Tasks.js";
import Dashboard from "../Dashboard.js";
//import { Chart } from "../Chart.js";

export const Content = () => {
    const [currentView, setCurrentView] = useState("Tasks");

  return (
    <section className="content">
      <Sidebar setCurrentView={setCurrentView} />
      <Tasks currentView={currentView} />
      {/* {currentView == "Dashboard" ? (
        <Dashboard />
      ) : (
        <Tasks currentView={currentView} />
      )} */}
    </section>
  );
};
