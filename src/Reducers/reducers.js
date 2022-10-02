import {CREATE, DELETE} from "./actions";
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case CREATE :
            const createdAnimal = {
                id: new Date().getTime(),
                name: action.payload.name
            }
            return [...state, createdAnimal]


        case DELETE :
            const index = state.findIndex(value => value.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
            return [...state]
    }
}


const useEleReducer = () => useReducer(reducer, []);


export {useEleReducer};
