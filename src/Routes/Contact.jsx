import React from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Components/utils/Context';
import "../Styles/Contact.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Contact = () => {
    const {state} = useGlobalContext();
    const themeClass = state.theme === "light" ? "light" : "dark";



  
  return (
    <div className={themeClass}>
    <div className='contact'>
      <h2>Necesitas saber mas?</h2>
      <p>Envianos tus preguntas y nos contactaremos contigo</p>
      <Form/>
    </div>
    </div>
  )
}

export default Contact