import { useContext } from "react";
import { VenderSerivceContext } from "../context/venderContext";

export const useVenderServiceContext = () =>{

    const context = useContext(VenderSerivceContext); 


    if(!context){
        throw Error('useVenderServiceContext must be used inside VenderSeriviceContextProvider')
    }
    return context

}


