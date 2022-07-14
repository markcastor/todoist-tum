import React, {useState} from "react";
import { FaPizzaSlice, FaMoon, FaSun } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {
   const [shouldShowMain, setShouldShowMain] = useState(false);
   const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
  <header className="header" data-testid="header">
      <nav>
          <div className="logo">
            <img src="/images/Daimadelivers.png" alt="Tasky"/>
          </div>
          <div className="settings">
            <ul>
              <li className="settings__add">
                <button 
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="buttton"
                onClick={()=> {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={()=> {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                tabIndex={0}

                >
                  +

                </button>
                </li>
              <li className="settings__darkmode">
                <button 
                data-testid="dark-mode-action"
                aria-label="Darkmode one/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}>
                {darkMode? <FaSun /> : <FaMoon />}
                </button>
                </li>
            </ul>
          </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
        /> 
  </header>
  );
};

/* Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}; */