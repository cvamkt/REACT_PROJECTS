import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/PokemoDetails/PokemonDetails";

function CustomRouters() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="/Pokemon/:id" element={<PokemonDetails/>} />
        </Routes>
    );
}

export default CustomRouters;