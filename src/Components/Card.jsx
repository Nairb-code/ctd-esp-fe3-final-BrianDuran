import React from "react";
import { useGlobalContext } from '../Components/utils/Context';
import { Link } from 'react-router-dom'


const Card = ({dentista}) => {

  const {dispatch, state} = useGlobalContext();

  const findDentista = state.favoritos.some((favDentista) => favDentista.id === dentista.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (!findDentista) {
      dispatch({ type: "ADD_FAVS", payload: dentista });
      alert('Usuario agregado a favoritos');
    } else {
      alert('Este usuario ya está en favoritos');
    }
  }



  return (
      <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/Detail/" + dentista.id}> 
      <div key={dentista.id}  >
        <img src="/images/doctor.jpg"  className='imagendoctor' alt="doctor" />
        <ul>
          <li>Id: {dentista.id}</li>
          <li>Nombre: {dentista.name}</li>
          <li>Username: {dentista.username}</li>
        </ul>
      </div>
      </Link>        
      <button onClick={() => {addFav()}} className="favButton">  {findDentista ? '🌟' : '⭐'}  </button>
    </div>
    
  );
};

export default Card;

{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
