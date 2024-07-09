import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/PokemoDetails/PokemonDetails";
import Search from "../components/Find/Find";


function CustomRouters() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/Pokemon/:id" element={<PokemonDetails/>} />
            <Route path="/Pokemon/:name" element={<PokemonDetails/>} />
        </Routes>
    );
}

export default CustomRouters;