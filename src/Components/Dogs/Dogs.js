import {Dog} from "./Dog";
import {useEleReducer} from "../../Reducers/reducers";
import {CREATE, DELETE} from "../../Reducers/actions";
import {useRef} from "react";


export default function Dogs (){

    const [state, dispatch] = useEleReducer();

    let dogName = useRef()




const createDog = () => {
    dispatch({type: CREATE, payload: {name: dogName.current.value}})
    dogName.current.value ="";
}

const deleteDog = (id) => {
    dispatch({type: DELETE, payload:{id}})
}




    return(
        <div>
            <p>Dogs</p>
            <input type="text" ref={dogName} />
            <button onClick={createDog}>Add</button>
            <div>{state.map((dog, index) => <Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>
    )
}