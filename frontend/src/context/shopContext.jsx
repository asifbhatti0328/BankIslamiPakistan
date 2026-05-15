import React,{ createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export const ShopContext = createContext();



const ShopContextProvider = (props) => {
    const backend_Url= import.meta.env.VITE_BACKEND_URL;
    const [token, setToken]= useState('');
    const navigate= useNavigate();


    const value = {
       navigate,backend_Url,
        token,setToken
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;