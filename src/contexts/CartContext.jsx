import React, {useContext,useState} from "react"

const CartContext = React.createContext()
const SetCartContext = React.createContext()

export function useCart(){
    return useContext(CartContext)
}
export function useSetCart(){
    return useContext(SetCartContext)
}


export function CartProvider({children}){
    const [cart, setCart] = useState([{
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
    function changeCart(sentCart){
        setCart(sentCart);
    }

    return(
        <CartContext.Provider value={cart}>
            <SetCartContext.Provider value={changeCart}>
                {children}
            </SetCartContext.Provider>
        </CartContext.Provider>
    )
}

