import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {

    const [pokemonList, setpokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokedexUrl, setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [NextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    async function downloadPokemons() {
        setIsLoading(true);
        const response = await axios.get(pokedexUrl) // download list of 20 pokemon
        const pokemonResult = response.data.results; //get array of pokemon from result



        console.log(response.data);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);


        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url)); //iterate over the array of pokemon
        const pokemonData = await axios.all(pokemonResultPromise); // it will all data after downloded.
        console.log(pokemonData);
        const pokeListResult = pokemonData.map((pokeData) => {  // itrate to each pokemon and extract id,name,image,types
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        });
        console.log(pokeListResult);
        setpokemonList(pokeListResult);
        setIsLoading(false);
    }
    // const [x, setx] = useState(0)
    // const [y, sety] = useState(0)
    //   generally we use this effect when we want to do any task between any task when it is running in background. it takes two argu:- callBack n dependency array. CALLBACK(anylogic which  i will write that will excute here when componenet is renedering first time. D.A if we dont pass DA then whenever componenet rerendered the whole logic will ReExcute, if we pass empty DA then it will excute when frst time componenet will pass not in Rerendering And if we pass Array then it will excute on rendering that will be equal to no. of Array.   Generally we use it in first load of the componenet suc as data download )
    useEffect(() => {
        downloadPokemons();

        //   console.log("effect called");
    }, [pokedexUrl]);



    return (
        <>
            {/* <div>
            x:{x} <button onClick={() => setx(x+1)}>Inc</button>
        </div>
        <div>
            y:{y} <button onClick={() => sety(y+1)}>Inc</button>
        </div> */}

            <div className="pokemon-list-wrapper">
                <div className="list"> Pokemon List</div>
                <div className="pokemon-wrapper">
                    {(isLoading) ? 'loading....' :
                        pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)
                    }
                </div>
                <div className="control">
                    <button disabled={prevUrl == null} onClick={() => setpokedexUrl(prevUrl)}>Previous</button>
                    <button disabled={NextUrl == null} onClick={() => setpokedexUrl(NextUrl)}>Next</button>
                </div>
            </div>
        </>
    )

}
export default PokemonList;