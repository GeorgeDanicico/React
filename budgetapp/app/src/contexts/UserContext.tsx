import { faLadderWater } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { v4 as uuidV4} from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import { UserContextInterface } from "./types";

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

const UserContext = React.createContext({} as UserContextInterface);

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider: (children: any) => JSX.Element = ({ children }) => {
    const [userId, setUserId] = useLocalStorage<string>('userId', '');
    const [userName, setUserName] = useLocalStorage<string>('expenses', '');
    const [isLogged, setIsLogged] = useLocalStorage<string>('isLogged', 'false');

    return (
        <UserContext.Provider value={{
            userId,
            userName,
            isLogged: isLogged === 'true',
        }}>
            {children }
        </UserContext.Provider>
    )
}
