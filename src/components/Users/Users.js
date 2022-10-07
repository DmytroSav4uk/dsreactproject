import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userActions} from "../../redux";

const Users = () =>{

const dispatch = useDispatch();


useEffect(()=>{
    userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
},[])




    return(
        <div>


        </div>
    )



}


export {Users}