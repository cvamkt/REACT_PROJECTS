import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokeDetails.css';

function PokemonDetails() {
    const { id } = useParams();
    // console.log(id);
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading ] = useState(true);
    async function downloadPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log(response.data);
        setPokemon({
            name: response.data.name,
            Image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        });
setLoading(false);
    }

    useEffect(() => {
        downloadPokemons();
    }, [id]);
    if(loading){
        return <div> Loading....</div>
    }
    return (
        <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.Image} alt="poke_Image" />
            <div className="pokemon-details-name">  <span>{pokemon.name}</span> </div>
            <div className="pokemon-details-name">Weight:{pokemon.weight} </div>
            <div className="pokemon-details-name">Height: {pokemon.height}</div>
            <div className="pokemon-details-types">
               <span>Types:-</span> {pokemon.types &&
                pokemon.types.map((type) => (<div key={type}>{type}</div >))}
                </div>

</div>
            );
}
            export default PokemonDetails;