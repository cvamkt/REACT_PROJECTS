import Search from "../Find/Find";
import PokemonList from "../PokemonList/PokemonList";
import './pokedex.css'




function Pokedex(){
    return(
        <div className="pokedx-wrapper">
       <h1 id="pokedex-heading"> Pokedex</h1>
        <Search/>
        <PokemonList/>
        </div>
    )
    }
    
    export default Pokedex;