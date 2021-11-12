import React, {useContext,useState} from "react"

const UserContext = React.createContext()
const UpdateUserContext = React.createContext()

export function useUser(){
    return useContext(UserContext)
}
export function useUpdateUser(){
    return useContext(UpdateUserContext)
}


export function UserProvider({children}){
    const [userStat, setUserStat] = useState("Sign In");
    function isLoggedIn(){
        setUserStat("Logout");
    }

    return(
        <UserContext.Provider value={userStat}>
            <UpdateUserContext.Provider value={isLoggedIn}>
                {children}
            </UpdateUserContext.Provider>    
        </UserContext.Provider>
    )
}

