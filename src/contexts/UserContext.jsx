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
    let x;
    if(localStorage.getItem("keys")!==null){
        x=true;
    }
    else{
        x=false;
    }
    const [userStat, setUserStat] = useState(x);
    function isLoggedIn(cond){
        setUserStat(cond);
    }

    return(
        <UserContext.Provider value={userStat}>
            <UpdateUserContext.Provider value={isLoggedIn}>
                {children}
            </UpdateUserContext.Provider>    
        </UserContext.Provider>
    )
}

