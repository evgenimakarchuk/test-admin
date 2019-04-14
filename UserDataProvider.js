UserDataProvider.js

import React from 'react';
import axios from 'axios';

const UserDataContext = React.createContext();

export const UserDataProvider = ({
    initialState = { items: [], total: 1000 },
    children,
}) => {
    console.log(initialState);
    /**
     * User data state
     * data: {
     *   item: User[],
     *   total: number
     * }
     * setData: (data) => data
     */
    const [data, setData] = React.useState(initialState);
    const cleanUp = () => setData(initialState);
    
    /**
     * Effect for loading user data
     * Depends on: nothing
     */
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: items } = await axios.get('http://localhost:8080/users');
                setData({ items, total: 1000 });
            } catch (e) {
                console.log(e);
                cleanUp();
            }
        }

        fetchData();
        

        return cleanUp;
    }, []);
    // const[]
    const value = {
        data,
        // setParams
    };
    // setParams()
    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserDataState = () => React.useContext(UserDataContext);