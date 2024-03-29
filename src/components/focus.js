import React, {useState} from "react";
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';
import { useSelectedProjectValue } from "../context";
import { AddTask } from "./AddTask";


export const focus = ({
    showShouldMain = false,
    showfocusQuickAddTask,
    setShowfocusQuickAddTask, 
}) => {
    const[task, setTask] = useState('');
    const[taskDate, setTaskDate] = useState('');
    const[project, setProject] = useState('');
    const[showMain, setShowMain] = useState(showShouldMain);
    const[showProjectOverlay, setShowProjectOverlay] = useState(false);
    const[showTaskDate, setShowTaskDate] = useState(false);
    const{ selectedProject } = useSelectedProjectValue();

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        if(projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');

        }else if (projectId === 'NEXT_7') {
            collatedDate =  moment()
            .add(7, 'days')
            .format('DD/MM/YYYY');

        }

        return (
            task && 
            projectId && 
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived:false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 'x9WVRTTj3xT8KwD'
                })
                .then(() => {
                    setTask('');
                    setProject('');
                    setShowMain('');
                    setShowProjectOverlay(false);

                })

            
        );
    };

    return (
        <div>
                {(showMain || showfocusQuickAddTask) && (
                    <div className="add-task__main" data-testid="add-task-main">
                    {showfocusQuickAddTask && (
                        <>
                        <div data-testid="quick-add-ta">
                            <h2 className="heade">Focus Quick Add Task</h2>
                            <span
                            className="add-task__cancel-x"
                            data-testid="add-task-quick-cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                                setShowfocusQuickAddTask(false);
                            }}
                            onKeyDown={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                                setShowfocusQuickAddTask(false);
                            }}
                            tabIndex={0}
                            role="button"
                           
                           
                        >
                            X
                            </span>
                        </div>
                        </>
                    )}
                    <ProjectOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />

                    <TaskDate 
                    setTaskDate={setTaskDate} 
                    showTaskDate={showTaskDate} 
                    setShowTaskDate={setShowTaskDate}
                    />

                    <input 
                    className="add-task__content"
                    data-testid="add-task-content"
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    />

                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() => 
                            showfocusQuickAddTask 
                                ?  addTask() && setShowfocusQuickAddTask(false)   
                                : addTask()
                            }
                    >
                        Add Task
                    </button>
                    {!showfocusQuickAddTask && (
                        <span 
                            className="add-task__cancel"
                            data-testid="add-task-main-cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                            }}
                            onKeyDown={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                            }}
                            tabIndex={0}
                            role="button"
                        >
                            Cancel
                        </span>
                    )}
                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                        onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
                        tabIndex={0}
                        role="button"
                    >
                        <FaRegListAlt/>
                    </span>
                    <span
                        className="add-task__date"
                        data-testid="show-task-date-overlay"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                        onKeyDown={() => setShowTaskDate(!showTaskDate)}
                        tabIndex={0}
                        role="button"
                    >
                        <FaRegCalendarAlt/>
                    </span>
                </div>
            ) }

            
        </div>
    );
}; 


