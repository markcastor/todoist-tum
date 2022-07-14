import React, { useState } from "react";
import { Sidebar } from "./Sidebar.js";
import { Tasks } from "../Tasks.js";
//import { Chart } from "../Chart.js";

export const Content = () => {
  const [currentView, setCurrentView] = useState("");

  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
};
