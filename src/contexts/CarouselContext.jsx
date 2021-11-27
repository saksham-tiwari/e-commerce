import React, {useContext,useState} from "react"

const CarouselContext = React.createContext()
const SetCarouselContext = React.createContext()

export function useCarousel(){
    return useContext(CarouselContext)
}
export function useSetCarousel(){
    return useContext(SetCarouselContext)
}


export function CarouselProvider({children}){
    const [carousel, setCarousel] = useState([]);
    function changeCarousel(sentCarousel){
        setCarousel(sentCarousel);
    }

    return(
        <CarouselContext.Provider value={carousel}>
            <SetCarouselContext.Provider value={changeCarousel}>
                {children}
            </SetCarouselContext.Provider>
        </CarouselContext.Provider>
    )
}

