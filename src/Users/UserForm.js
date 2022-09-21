import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {userValidator} from "../Validators/User.validator";
import {userService} from "../Services/User.service";


const UserForm = ({setUsers}) =>{
const {register, handleSubmit, reset ,formState:{errors, isValid},setValue} = useForm({
    resolver:joiResolver(userValidator),
    mode:'all'
});
   const submit = async (user) => {
const {data} = await userService.create(user)
       //console.log(data)
       setUsers(users =>[...users,data])
       reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Save and add</button>
</form>)}

export {UserForm};