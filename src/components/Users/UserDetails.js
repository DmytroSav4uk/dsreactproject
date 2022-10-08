import {useSelector} from "react-redux";

const UserDetails = () => {

    const {oneUser} = useSelector(state => state.userReducer)
     return(

         <div>
            <h4>{oneUser&&oneUser.username}</h4>
            <h4>{oneUser&&oneUser.email}</h4>
         </div>
     )
}

export {UserDetails}