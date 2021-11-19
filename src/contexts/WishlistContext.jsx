import React, {useContext,useState} from "react"

const WishlistContext = React.createContext()
const SetWishlistContext = React.createContext()

export function useWishlist(){
    return useContext(WishlistContext)
}
export function useSetWishlist(){
    return useContext(SetWishlistContext)
}


export function WishlistProvider({children}){
    const [wishlist, setWishlist] = useState([{
        product:{
            id: 0,
            name: "Name",
            price: 0,
            brand: "Brand",
            description: "Description",
            picture1: "",
            picture2: "",
            picture3: "",
            picture4: "",
            comment_product: [],
            tag_product: []
        },
        quantity: 1,
        price: 0
    }]);
    function changeWishlist(sentWishlist){
        setWishlist(sentWishlist);
    }

    return(
        <WishlistContext.Provider value={wishlist}>
            <SetWishlistContext.Provider value={changeWishlist}>
                {children}
            </SetWishlistContext.Provider>
        </WishlistContext.Provider>
    )
}

