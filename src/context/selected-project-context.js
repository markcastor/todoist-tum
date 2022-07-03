import React , {createContext, useContext,useState } from 'react';

//passing data down react 

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({children}) => {
    //to Know what particular task we are adding the project to
    const [selectedProject, setSelectedProject] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider 
        value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>

    );

};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);


