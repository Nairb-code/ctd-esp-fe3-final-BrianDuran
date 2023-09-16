import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../Components/utils/Context';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "../Styles/Detail.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {dentista, setDentista, state} = useGlobalContext();
  const themeClass = state.theme === "light" ? "light" : "dark";
  const params = useParams()
  console.log(params)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  const axiosUsers = ()=>{
    axios(url)
    .then(res=>{
      console.log(res.data)
      setDentista(res.data)
      
      
    })
  }
  useEffect(axiosUsers, [])

  


  return (
    <>
      <div className={themeClass}>
      <div className='detail'>
      <h1>Detalles del dentista </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <ul>
      <li>Id: {dentista.id}</li>
      <li>Nombre: {dentista.name}</li>
      <li>Username: {dentista.username}</li>
      <li>Email: {dentista.email}</li>
      <li>Numero: {dentista.phone}</li>
      <li>Website: {dentista.website}</li>
      </ul>
      </div>
      </div>
      
    </>
  )
}

export default Detail