import React, { useEffect } from 'react'
import axios from 'axios'
import { createContext, useContext, useReducer, useState } from "react";


const localFavs = JSON.parse(localStorage.getItem('favoritos'))
const initialFavState = localFavs ? localFavs : []


const initialState = {
  data: [],
  dentista: [],
  favoritos: initialFavState,
  theme: "light"
}

//Reducer ....

const reducer = (state, action) =>{
    switch(action.type) {
      case "GET_DATA":
        return {...state, data: action.payload }
      case "ADD_FAVS":
        return {...state, favoritos: [...state.favoritos, action.payload]}
      case "DEL_FAVS":
        return {...state, favoritos: []}
      case "THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        default: 
        throw new Error()
    }
}

export const ContextGlobal = createContext(undefined);


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const [usuario, setUsuario] = useState({
    nombreCompleto: " ",
    email: " ",
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  // Estados para los detalles de dentistas 
  const [dentista, setDentista] = useState([])


  const url = "https://jsonplaceholder.typicode.com/users/"

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: "GET_DATA", payload: res.data}))
    .catch(err => console.log(err))
    }, [])


  useEffect(()=>{
    localStorage.setItem("favoritos", JSON.stringify(state.favoritos))
    }, [state.favoritos])

  

  return (
    <ContextGlobal.Provider value={{dispatch, state, usuario, setUsuario,   show, setShow, error, setError, dentista, setDentista}}>

      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = ()=> useContext(ContextGlobal)
