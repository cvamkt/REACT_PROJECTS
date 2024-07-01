import { Link } from 'react-router-dom';
import './App.css'
// import Pokedex from './components/pokedex/pokedex'
import CustomRouters from './routes/CustomRoutes';
// import './components/pokedex/pokedex.css';


function App() {


  return (
    <div className='router-pokedex'>
     <h1 id="pokedex-heading">
     <Link to= "/">Pokedex</Link> 
      </h1>
      <CustomRouters />
    </div>
  )
}

export default App
