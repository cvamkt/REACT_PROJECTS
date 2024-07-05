import { useEffect, useState } from "react";
import Search from "../Find/Find";
import PokemonList from "../PokemonList/PokemonList";
import './pokedex.css'
import PokemonDetails from "../PokemoDetails/PokemonDetails";




function Pokedex() {

    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className="pokedx-wrapper">

            <Search updateSearchTerm={setSearchTerm} />

            {(!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;