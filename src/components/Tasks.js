import React, { useEffect } from 'react';
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTittle, collatedTasksExit } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = ()  =>{
    const {selectedProject } = useSelectedProjectValue();
    const {projects } = useProjectsValue();
    const {tasks } = useTasks(selectedProject);
    

    let projectName ='';

    if (projects && selectedProject && !collatedTasksExit(selectedProject)){
      projectName = getTitle(projects, selectedProject).name;
      console.log('projectName 1:', projectName);


    }
    if (collatedTasksExit(selectedProject) && selectedProject){
      projectName = getCollatedTittle(collatedTasks,selectedProject).name;
      console.log('projectName 2:', projectName);

    }

    useEffect(() => {
      document.title = `&{projectName}: Todoist`;

    });


    return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name">{projectName}</h2>
    
          <ul className="tasks__list">
            {tasks.map((task) => (
              <li key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.task} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>
    
          {/* <AddTask /> */}
        </div>
      );
};