import {useSelector} from "react-redux";

import css from "../components.module.css"

const UserDetails = () => {

    const {oneUser} = useSelector(state => state.userReducer)
     return(

         <div className={css.details}>
            <h4>{oneUser&&oneUser.username}</h4>
            <h4>{oneUser&&oneUser.email}</h4>
         </div>
     )
}

export {UserDetails}