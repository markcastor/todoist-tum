import { collatedTasks } from '../constants';

export const collatedTasksExist = selectedProject =>
    collatedTasks.find(tasks => task => task.key === selectedProject);