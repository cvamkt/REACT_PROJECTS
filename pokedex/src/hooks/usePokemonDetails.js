import axios from "axios";
import { useEffect, useState } from "react";
// import usePokemonList from "./usePokemonList";

function usePokemonDetails(id, pokemonName) {
    // const { id } = useParams();
    // console.log(id);
    const [pokemon, setPokemon] = useState({});
    // const [loading, setLoading] = useState(true);

    async function downloadPokemons() {
        try {
            let response;

            if (pokemonName) {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            } else {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }

            const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`);
            // console.log(response.data);
            setPokemon(state => ({

                name: response.data.name,
                Image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name),
                similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 10)

            }));



            // setLoading(false);
            console.log(response.data.types);
            setpokemonListState({ ...pokemonListState, type: response.data.types ? response.data.types[0].type.name : '' })

        }
        catch (error) {
            // console.log("something went wrong");
        }
    }

    const [pokemonListState, setpokemonListState] = useState({});

    useEffect(() => {

        downloadPokemons();
        console.log("list", pokemon.types);
    }, [id]);

    return [pokemon,];
}
export default usePokemonDetails;