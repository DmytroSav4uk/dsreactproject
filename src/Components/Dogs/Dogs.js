import {Dog} from "./Dog";
import {useEleReducer} from "../../Reducers/reducers";
import {CREATE, DELETE} from "../../Reducers/actions";
import {useRef, useState} from "react";


export default function Dogs (){

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [state, dispatch] = useEleReducer();

    let dogName = useRef(null)




const createDog = () => {
    dispatch({type: CREATE, payload: {name: dogName.current.value}})
    dogName.current.value = '';
}

const deleteDog = (id) => {
    dispatch({type: DELETE, payload:{id}})
}


    return(
        <div>
            <p>Dogs</p>
            <input type="text" ref={dogName}  value={value} onChange={handleChange} />
            <button disabled={!value} onClick={createDog}>Add</button>
            <div>{state.map((dog, index) => <Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>
    )
}