import { useContext } from "react";
import { VenderServiceContext } from "../context/venderContext";

export const useVenderServiceContext = () =>{

    const context = useContext(VenderServiceContext); 


    if(!context){
        throw Error('useVenderServiceContext must be used inside VenderSeriviceContextProvider')
    }
    return context

}


