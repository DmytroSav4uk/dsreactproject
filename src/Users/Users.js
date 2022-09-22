import {useEffect, useState} from "react";

import {User} from "./User"
import {UserForm} from "./UserForm";

import {userService} from "../Services/User.service";
import css from '../Css/components.module.css'

const Users = () => {
    let [users, setUsers] = useState([]);
    let [userForUpdate, setUserForUpdate] = useState(null)

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <div className={css.inputs}>
                <UserForm setUsers={setUsers} userForUpdate={userForUpdate} setUserForUpdate={setUserForUpdate}/>
            </div>

            <div className={css.cards}>
                {users.map(user => <User key={user.id} user={user} setUsers={setUsers} setUserForUpdate={setUserForUpdate}
                />)}
            </div>
        </div>)
};

export {Users};
