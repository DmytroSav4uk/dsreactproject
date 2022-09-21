import {User} from "./User";
import {useEffect, useState} from "react";
import {getUsers} from "../Services/Axios.users.service";
import css from './User.module.css'
import {UserForm} from "./UserForm";
import {userService} from "../Services/User.service";


function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))

    }, [])

    return (

        <div>

<div className={css.inputs}>
            <UserForm setUsers={setUsers}/>
</div>
            <hr/>
            <div className={css.users}>
                {users.map(user=><User key = {user.id} user={user} setUser={setUsers}/>)}
            </div>
        </div>)
}

export default Users;
