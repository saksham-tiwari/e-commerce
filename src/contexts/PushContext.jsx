import React, {useContext,useState} from "react"

const PushContext = React.createContext()
const SetPushContext = React.createContext()

export function usePush(){
    return useContext(PushContext)
}
export function useSetPush(){
    return useContext(SetPushContext)
}


export function PushProvider({children}){
    const [push, setPush] = useState("");
    function changePush(push){
        setPush(push);
    }

    return(
        <PushContext.Provider value={push}>
            <SetPushContext.Provider value={changePush}>
                {children}
            </SetPushContext.Provider>
        </PushContext.Provider>
    )
}

