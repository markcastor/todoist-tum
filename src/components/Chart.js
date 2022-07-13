import React, { useState, useEffect } from 'react';

//import '../App.css';
import { Mychart } from './MyChart';


export const Chart = ({darkMode, setDarkMode}) => {
    return(
        <div className='dashboard' data-testid="dash">
            <div className='Container'>
                <div className='Taskcompleted'>
                    <h1></h1>
                    <span></span>
                </div>
                <div className='ProjectDone'><>
                <h1></h1>
                <span></span></>
                </div>
                <div className='NewTask'><><span></span></> </div>
                
            </div>
            <div className='task-done'><Mychart/></div>


        </div>
    )
}
   
  