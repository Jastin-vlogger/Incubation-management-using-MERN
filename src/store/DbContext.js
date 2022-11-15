import {createContext ,useState} from 'react'

export const UserData = createContext(null)

function DbContext({children}) {
    const [user, setUser] = useState('')
    // console.log(user);
    return(
        <UserData.Provider value={{user, setUser}}>
            {children}
        </UserData.Provider>
    )
}

export default  DbContext;
