
import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const[user, setUser] = useState (false);

    const toggle = () => setUser(user ? false : true);
    return(
        <UserContext.Provider value={{user , toggle}}>
            {children}</UserContext.Provider>
    )
}