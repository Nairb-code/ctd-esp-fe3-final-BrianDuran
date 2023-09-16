
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import {  Routes, Route } from 'react-router-dom'



function App() {
  return (
      
      <div className="App">
          <Navbar/>        
          <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/Home' element= {<Home/>}/>
          <Route path='/Destacados' element= {<Favs/>}/>
          <Route path='/Contact' element= {<Contact/>}/>
          <Route path='/Detail/:id' element= {<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
