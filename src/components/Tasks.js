import React, { useState, useEffect } from "react";
import { useTasks } from "../hooks";
import { Checkbox } from "./Checkbox";
import Dashboard from "./Dashboard";
import { AddTask } from "./AddTask";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";

export const Tasks = ({ currentView }) => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (currentView == "Dashboard") {
    projectName = "Dashboard";
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      {currentView == "Dashboard" ? (
        <Dashboard />
      ) : (
        <>
          <ul className="tasks__list">
            {tasks.map((task) => (
              <li key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.task} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>
          <AddTask />
        </>
      )}
    </div>
  );
};
