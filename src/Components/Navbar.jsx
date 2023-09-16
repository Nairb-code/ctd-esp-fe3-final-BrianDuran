import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

  const {dispatch} = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ type: "THEME" });
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)}>⬅ Atras</button>
      <Link to="/Home"> <h4 style={{margin:10}}>Home</h4> </Link>
      <Link to="/Contact"> <h4 style={{margin:10}}>Contacto</h4> </Link>
      {/* <Link to="/Detail/id"> <h4 style={{margin:10}}>Detalles</h4> </Link> */}
      <Link to="/Destacados"> <h4 style={{margin:10}}>Destacados</h4> </Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar