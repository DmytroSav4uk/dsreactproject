import css from '../Css/components.module.css'
import {userService} from "../Services/User.service";

const User = ({user, setUsers,setUserForUpdate}) => {
    const {id, name, username, email} = user;


    const deleteUser = async () => {
        await userService.deleteById(id)
        setUsers(users => {
                const index = users.findIndex(value => value.id === id);
                if (index !== -1) {
                    users.splice(index, 1)
                }
                return [...users]
            }
        )
    }

    // const updateUser = async () => {
    //     await userService.updateById(id, user)
    //     console.log(id)
    // }

    return (
        <div className={css.card}>
            <div className={'text'}>
                <h4>{name} "{username}" </h4>
                <h5>{email}</h5>
            </div>

            <div className={css.buttons}>
                <button onClick={()=>setUserForUpdate(user)}>update</button>
                <button onClick={()=>deleteUser()}>delete</button>
            </div>
        </div>
    );
};
export {User};
