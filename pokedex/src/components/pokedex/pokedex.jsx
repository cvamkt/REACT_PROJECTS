import Search from "../Find/Find";
import PokemonList from "../PokemonList/PokemonList";
import './pokedex.css'




function Pokedex(){
    return(
        <div className="pokedx-wrapper">
       
        <Search/>
        <PokemonList/>
        </div>
    )
    }
    
    export default Pokedex;