import React, {useContext,useState} from "react"

const AllowedContext = React.createContext()
const SetAllowedContext = React.createContext()

export function useAllow(){
    return useContext(AllowedContext)
}
export function useSetAllow(){
    return useContext(SetAllowedContext)
}


export function AllowProvider({children}){
    const [allow, setAllow] = useState(false);
    function changeAllow(){
        setAllow(true);
    }

    return(
        <AllowedContext.Provider value={allow}>
            <SetAllowedContext.Provider value={changeAllow}>
                {children}
            </SetAllowedContext.Provider>
        </AllowedContext.Provider>
    )
}

