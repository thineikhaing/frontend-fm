import React, {useState, createContext} from 'react';

export const MainContext = createContext();

export default function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState({});

    return(
        <MainContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </MainContext.Provider>    
    )
}