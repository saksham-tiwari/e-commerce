import React, {useContext,useState} from "react"

const SearchContext = React.createContext()
const SetSearchContext = React.createContext()

export function useSearch(){
    return useContext(SearchContext)
}
export function useSetSearch(){
    return useContext(SetSearchContext)
}


export function SearchProvider({children}){
    const [search, setSearch] = useState(
        {
            cond: false,
            query: ""
        }
    );
    function changeSearch(sentSearch){
        setSearch(sentSearch);
    }

    return(
        <SearchContext.Provider value={search}>
            <SetSearchContext.Provider value={changeSearch}>
                {children}
            </SetSearchContext.Provider>
        </SearchContext.Provider>
    )
}

