import React from 'react'
import { useGlobalContext } from '../Components/utils/Context';
import "../Styles/Home.css"
import Card from '../Components/Card';
import "../Styles/Themes.css"




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalContext();

  const themeClass = state.theme === "light" ? "light" : "dark"; 


  return (
    <main className={themeClass} >
    <h1>Home</h1>
    <div className='card-grid' >
    {state.data.map(dentista => <Card dentista= {dentista} key={dentista.id}/>)}
    </div>
    </main>
  )
}

export default Home