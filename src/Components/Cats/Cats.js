import {useEleReducer} from "../../Reducers/reducers";
import {CREATE, DELETE} from "../../Reducers/actions";
import {useRef,useState} from "react";
import {Cat} from "./Cat";

export default function Cats() {


    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };



    const [state, dispatch] = useEleReducer();

    let catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload: {name: catName.current.value}})
    }

    const deleteCat = (id) => {
        dispatch({type: DELETE, payload:{id}})
    }



    return(
        <div className>
            <p> Cats</p>
            <input type="text"   value={value} onChange={handleChange} ref={catName} />
            <button disabled={!value} onClick={createCat}>Add</button>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>
    )
}