import css from './User.module.css'
import {userService} from "../Services/User.service";


const User = ({user, setUser}) => {
    const {id, name, username, email} = user;
    const deleteUser = async () => {
        await userService.deleteById(id)
        setUser(user => {
                const index = user.findIndex(value => value.id === id);
                if (index !== -1) {
                    user.splice(index, 1)
                }
                return [...user]
            }
        )
    }


    const updateUser = async () => {
        await userService.updateById(id, user)
        console.log(id)
    }

    return (
        <div className={css.user}>
            <div className={'text'}>
                <h4>{name} "{username}" </h4>
                <h5>{email}</h5>
            </div>

            <div className={css.buttons}>
                <button onClick={updateUser}>update</button>
                <button onClick={deleteUser}>delete</button>
            </div>
        </div>
    );


}
export {User};
