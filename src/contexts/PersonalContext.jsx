import React, {useContext,useState} from "react"

const PersonalContext = React.createContext()
const SetPersonalContext = React.createContext()

export function usePersonal(){
    return useContext(PersonalContext)
}
export function useSetPersonal(){
    return useContext(SetPersonalContext)
}


export function PersonalProvider({children}){
    const [personal, setPersonal] = useState({
        email: "",
        name: "",
        gender: "",
        mobile: "",
        picture: "",
        address: "",
        is_seller: false
    });
    function changePersonal(sentPersonal){
        setPersonal(sentPersonal);
    }

    return(
        <PersonalContext.Provider value={personal}>
            <SetPersonalContext.Provider value={changePersonal}>
                {children}
            </SetPersonalContext.Provider>
        </PersonalContext.Provider>
    )
}

