import React from "react";
import  {Sidebar} from './Sidebar.js';
import {Tasks} from '../Tasks.js'

export const Content = () => (
 <section className="content">
    <Sidebar />
    <Tasks /> 
 </section>
);