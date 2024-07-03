import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {
    const [pokemonListState, setpokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon/',
        nextUrl: '',
        prevUrl: ''
        
    });
    async function downloadPokemons() {

       

            // setIsLoading(true);
            setpokemonListState((state) => ({ ...state, isLoading: true }));
            // const response = await axios.get(pokedexUrl)

            const response = await axios.get(pokemonListState.pokedexUrl);  // download list of 20 pokemon
            const pokemonResult = response.data.results; //get array of pokemon from result


            console.log("response ise", response.data.pokemon);
            console.log(pokemonListState);
            // console.log(response.data);
            // setNextUrl(response.data.next);
            // setPrevUrl(response.data.previous);

            setpokemonListState((state) => ({
                ...state,
                nextUrl: response.data.next,
                prevUrl: response.data.previous,
            }));




            const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url)); //iterate over the array of pokemon
            const pokemonData = await axios.all(pokemonResultPromise); // it will all data after downloded.
            console.log(pokemonData);
            const pokeListResult = pokemonData.map((pokeData) => {  // itrate to each pokemon and extract id,name,image,types
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_shiny,
                    types: pokemon.types
                };
            });
            // console.log(pokeListResult);
            // setpokemonList(pokeListResult);
            // setIsLoading(false);
            setpokemonListState((state) => ({
                ...state,
                pokemonList: pokeListResult,
                isLoading: false
            }));

            // console.error("Error fetching pokemon data:", error);
            setpokemonListState((state) => ({
                ...state,
                isLoading: false,
            }));
        

    }
    useEffect(() => {
        downloadPokemons();

        //   console.log("effect called");
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setpokemonListState];
}
export default usePokemonList;