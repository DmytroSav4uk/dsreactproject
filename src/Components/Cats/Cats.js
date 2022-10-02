import {useEleReducer} from "../../Reducers/reducers";
import {CREATE, DELETE} from "../../Reducers/actions";
import {useRef} from "react";
import {Cat} from "./Cat";

export default function Cats() {

    const [state, dispatch] = useEleReducer();

    let catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload: {name: catName.current.value}})
        catName.current.value ="";
    }

    const deleteCat = (id) => {
        dispatch({type: DELETE, payload:{id}})
    }

    return(
        <div>
            <p> Cats</p>
            <input type="text" ref={catName} />
            <button onClick={createCat}>Add</button>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )
}