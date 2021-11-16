import React, {useContext,useState} from "react"

const SellerContext = React.createContext()
const SetSellerContext = React.createContext()

export function useSeller(){
    return useContext(SellerContext)
}
export function useSetSeller(){
    return useContext(SetSellerContext)
}


export function SellerProvider({children}){
    const [seller, setSeller] = useState(false);
    function changeSeller(cond){
        setSeller(cond);
    }

    return(
        <SellerContext.Provider value={seller}>
            <SetSellerContext.Provider value={changeSeller}>
                {children}
            </SetSellerContext.Provider>
        </SellerContext.Provider>
    )
}

