import React, { createContext, useContext, useEffect } from 'react';
import axios from "axios";
const AppContext = createContext();
const API = "https://jsonplaceholder.typicode.com/photos"; // video 14 data api 


const AppProvider = ({ children }) => {

    const getProducts = async (url) =>{
        const res = await axios.get(url);
        const products = await res.data
    }

    useEffect(() => {
        getProducts(API)
    },[])

  return (
    <AppContext.Provider value={{myName: "Liton Ali"}}>
      {children}
    </AppContext.Provider>
  )
};


// custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}


export  {AppProvider,  AppContext, useGlobalContext}; 
