import React, {useContext,useState} from "react"

const AuthContext = React.createContext()
const SetAuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function useSetAuth(){
    return useContext(SetAuthContext)
}


export function AuthProvider({children}){
    const [auth, setAuth] = useState(false);
    function changeAuth(sentAuth){
        setAuth(sentAuth);
    }

    return(
        <AuthContext.Provider value={auth}>
            <SetAuthContext.Provider value={changeAuth}>
                {children}
            </SetAuthContext.Provider>
        </AuthContext.Provider>
    )
}

