import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

// import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "./User";

const Users = () =>{

const dispatch = useDispatch();
const { users, error, loading, userFromAPI} = useSelector(state => state.userReducer);

useEffect(()=>{
    // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    dispatch(userActions.getAll())
},[])




    return(
        <div>
            {userFromAPI&&<h1>data from API: {userFromAPI.name}</h1>}
            {loading&&<h1>Loading........................</h1>}
            {error&&<h1>Error</h1> }
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    )
}


export {Users}