import React, { useState } from "react";

import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'
import {Projects} from '../Projects';
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";

export const Sidebar = () => {
    const{ setSelectedProject } = useSelectedProjectValue();
    const[active, setActive ] = useState('inbox')
    const[showProjects, setShowProjects ] = useState(true);
    

    
    return (
        <div  className="sidebar" data-testid="sidebar" >
            <ul className="sidebar__generic" >
            <li 
                data-testid="inbox" 
                className={active === 'inbox' ? 'active': undefined}
                 >
                    <div 
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                        
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setActive('inbox');
                          setSelectedProject('INBOX');
                        }
                      }}
                    tabIndex={0}
                    role="button">
                    <span>
                        <FaInbox/>
                    </span>
                    <span>Inbox</span>
                    </div>
                </li>
                <li 
                    data-testid="today" 
                    className={active === 'today' ? 'active': undefined}
                                                                          
                >
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                        
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setActive('today');
                          setSelectedProject('TODAY');
                        }
                      }}
                    >
                    <span>
                        <FaRegCalendar/>
                    </span>
                    <span>Today</span>
                    </div>
                    
                </li>
                <li 
                    data-testid="next_7" 
                    className={active === 'next_7' ? 'active': undefined}
                  
                >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      setActive('next_7');
                      setSelectedProject('NEXT_7');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                      }
                    }}>
                    <span>
                        <FaRegCalendarAlt/>
                    </span>
                    <span>Next 7 days</span>

                    </div>
                    
                </li>
            </ul>
            <div 
            className="sidebar__middle" 
            onClick={() => setShowProjects(!showProjects)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') setShowProjects(!showProjects);
              }}
              role="button"
              tabIndex={0}>
                <span>
                    <FaChevronDown 
                    className={!showProjects ? 'hidden-projects' : undefined}/>
                </span>
                <h2>Projects</h2>


            </div>

            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

            {showProjects && <AddProject/>}

            <ul className="sidebar__generic">
                <li className={active === 'dashboard' ? 'active': undefined}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      setActive('Chart');
                      ;
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setActive('Dashboard');
                        
                      }
                    }}>
                    <span><FaRegCalendar/></span>
                    <span>Dashboard</span>
                    </div>
                </li>
            </ul>

        </div>

    );
};