import React, {useContext,useState} from "react"

const ObjectContext = React.createContext()
const UpdateObjectContext = React.createContext()

export function useObject(){
    return useContext(ObjectContext)
}
export function useUpdateObject(){
    return useContext(UpdateObjectContext)
}


export function ObjectProvider({children}){
    const [object, setObject] = useState({});
    function createObject(obj){
        setObject(obj);
    }

    return(
        <ObjectContext.Provider value={object}>
            <UpdateObjectContext.Provider value={createObject}>
                {children}
            </UpdateObjectContext.Provider>    
        </ObjectContext.Provider>
    )
}