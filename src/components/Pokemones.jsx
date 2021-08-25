import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {obtenerPokemonesAccion} from "../redux/pokeDucks";

export default function() {
    const dispatch = useDispatch();
    const listaPokemones = useSelector(state => state.pokemones.arrayPokemones);
    console.log(listaPokemones);
    return(
        <div className="div-pokemones">
            <h3>Mi lista de Pokemones!</h3>
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Mostrar</button>
            <div>
                {listaPokemones.map(pokemon => <div>
                    <h5>{pokemon.name}</h5>
                </div>)}
            </div>
        </div>
    );
}