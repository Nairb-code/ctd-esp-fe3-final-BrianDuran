import React from "react";
import { useGlobalContext } from '../Components/utils/Context';
import Card from "../Components/Card";
import "../Styles/Favs.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatch} = useGlobalContext();
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const resetFavoritos = ()=>{
      dispatch({ type: "DEL_FAVS" });
    }

    const themeClass = state.theme === "light" ? "light" : "dark"; 

  return (
    <>
      <div className={themeClass}>
      <div className="resetFavs">
      <h1>Dentistas destacados</h1>
      <button className="resetFavs" onClick={resetFavoritos}>Resetear favoritos</button>
      </div>
      <div className="card-grid">
      
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

      {state.favoritos.map(fav => <Card  dentista={fav}  key={fav.id}  /> )}

      </div>
      </div>
    </>
  );
};

export default Favs;
