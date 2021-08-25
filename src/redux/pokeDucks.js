//módulo donde reunimos los types, reducers, los actions-creators y nuestro stateInicial en un solo archivo

import axios from "axios";

//state inicial
const stateInicial = {
    arrayPokemones: [],
}

//types o tipos de acciones
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';

//reducer
export default function pokeReducer(state = stateInicial, action) {
    switch(action.type) {
        case OBTENER_POKEMONES_EXITO: //si trajimos los pokemones con exito de la API
            return {...state, arrayPokemones: action.payload}

        default:
            return state;
    }
}

//acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => { //estamos frente a una accion que realizo una llamada a la API, por eso es async
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'); //traemos 20 pokemones de la API
        dispatch({ //despachamos nuestra accion
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results,
        });

    }catch (err) { //o mostramos un error en consola si existio
        console.log(err);
    }
}

