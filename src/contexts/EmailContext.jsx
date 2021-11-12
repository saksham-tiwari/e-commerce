import React, {useContext,useState} from "react"

const EmailContext = React.createContext()
const SetEmailContext = React.createContext()

export function useEmail(){
    return useContext(EmailContext)
}
export function useSetEmail(){
    return useContext(SetEmailContext)
}


export function EmailProvider({children}){
    const [email, setEmail] = useState("");
    function changeEmail(sentEmail){
        setEmail(sentEmail);
    }

    return(
        <EmailContext.Provider value={email}>
            <SetEmailContext.Provider value={changeEmail}>
                {children}
            </SetEmailContext.Provider>
        </EmailContext.Provider>
    )
}

