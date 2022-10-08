import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from "../components.module.css"



const User = ({user}) => {
    const {id, name, username, email} = user;

    const dispatch = useDispatch();


    return (


            <div className={css.element}>
                <h4>{id}:{name}</h4>

                <div className={css.buttonWrap}>
                <button onClick={() => dispatch(userActions.getOne(user))}>Select</button>
                <button onClick={()=>dispatch(userActions.getById({id}))}>Get user From API</button>
                <button onClick={() => dispatch(userActions.deleteById(id))}>Delete</button>
                </div>
            </div>



    )
}


export {User};