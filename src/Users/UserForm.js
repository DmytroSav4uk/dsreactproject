import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {useEffect} from "react";

import {userValidator} from "../Validators/User.validator";
import {userService} from "../Services/User.service";

const UserForm = ({setUsers, userForUpdate, setUserForUpdate}) =>{
const {register, handleSubmit, reset ,formState:{errors, isValid},setValue} = useForm({
    resolver:joiResolver(userValidator),
    mode:'all'
});

    useEffect(() => {
        if (userForUpdate) {
            setValue('name', userForUpdate.name, {shouldValidate: true})
            setValue('username', userForUpdate.username, {shouldValidate: true})
            setValue('email', userForUpdate.email, {shouldValidate: true})
        }
    }, [userForUpdate, setValue])


   const submit = async (user) => {
       if (userForUpdate) {
           const {data} = await userService.updateById(userForUpdate.id, user);
           setUsers((users) => {
               const findUser = users.find(value => value.id === userForUpdate.id);
               Object.assign(findUser, data)
               setUserForUpdate(null)
               return [...users]
           })
       } else {
           const {data} = await userService.create(user);
           setUsers(users => [...users, data])
       }
       reset()
    }


    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{'email example: user@gmail.com'}</span>}
            <button  disabled={!isValid}>{userForUpdate ? 'save and update':'save and add'}</button>
</form>)}

export {UserForm};